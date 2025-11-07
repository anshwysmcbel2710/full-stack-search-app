"use client";

import { useState } from "react";

type Item = {
  id: string;
  title: string;
  body: string;
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);

  async function doSearch() {
    setError(null);
    setMessage(null);
    setSummary(null);

    const q = query.trim();
    if (!q) {
      setError("Please enter a search term.");
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q }),
      });

      const data = await res.json();

      if (res.status === 400) {
        setError(data?.error || "Empty query");
        setResults([]);
        return;
      }

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      setResults(data.results ?? []);
      if (data.message) setMessage(data.message);
      if (data.summary) setSummary(data.summary);
    } catch (err: any) {
      setError(err?.message ?? "Network error");
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Mini Search App</h1>

      {/* Search bar */}
      <div className="w-full max-w-3xl flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your query..."
          className="flex-1 px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-500"
        />
        <button
          onClick={doSearch}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Results section */}
      <div className="w-full max-w-3xl mt-6">
        {loading && <p className="text-sm text-gray-500">Searching…</p>}
        {error && <p className="text-sm text-red-500">Error: {error}</p>}
        {message && <p className="text-sm text-gray-400">{message}</p>}
        {summary && (
          <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded">
            <strong className="block mb-1">Summary</strong>
            <p className="text-sm text-gray-700 dark:text-gray-300">{summary}</p>
          </div>
        )}

        <ul className="space-y-3">
          {results.map((r) => (
            <li
              key={r.id}
              className="p-4 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
            >
              <h2 className="text-lg font-semibold">{r.title}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                {r.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
