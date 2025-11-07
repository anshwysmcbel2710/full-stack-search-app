// app/api/search/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ITEMS } from "../../../data/data"; // path correct for mini-search structure

// Normalize helper
function normalize(s: string) {
  return (s || "").trim().toLowerCase();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const query = typeof body?.query === "string" ? body.query.trim() : "";

    // 1️⃣ Empty query → 400
    if (!query) {
      return NextResponse.json(
        { error: "Empty query", message: "Please provide a non-empty search term." },
        { status: 400 }
      );
    }

    const q = normalize(query);

    // 2️⃣ Score items (title + body search)
    const scored = ITEMS.map((it) => {
      const title = normalize(it.title);
      const body = normalize(it.body);
      let score = 0;

      if (title.includes(q)) score += 2;   // weight title higher
      if (body.includes(q)) score += 1;    // body match smaller weight

      return { ...it, score };
    });

    // 3️⃣ Keep only matches, order by score, top 3
    const matches = scored
      .filter((it) => it.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    // 4️⃣ No matches → friendly message
    if (matches.length === 0) {
      return NextResponse.json({
        results: [],
        message: "No matches found.",
      });
    }

    // 5️⃣ Optional: summary + sources for bonus
    const sources = matches.map((m) => m.id);
    const summary = matches.map((m) => m.title).join(" • ");

    // 6️⃣ Build response with snippet
    const results = matches.map((m) => ({
      id: m.id,
      title: m.title,
      snippet:
        m.body.length > 140 ? m.body.slice(0, 140).trim() + "..." : m.body,
    }));

    return NextResponse.json({ results, sources, summary });
  } catch (err) {
    console.error("Search POST error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
