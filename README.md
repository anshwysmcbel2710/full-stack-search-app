<div class="section">
<h1>🏷️ Project Title</h1>
<p><strong>NextJS Full-Stack Search Application</strong><br>

</div>

<div class="section">
<h1>🧾 Executive Summary</h1>
<p>
This project implements a production-grade, client-server search system built on the Next.js App Router.
It provides a POST-based API endpoint that performs deterministic keyword relevance scoring against
a structured dataset stored in <strong>data/data.ts</strong> and returns ranked results, summaries, and source references.
The UI implements debounced real-time querying, loading states, empty-state handling, and API-driven rendering.
The architecture is fully serverless-compatible and optimized for deployment on Vercel or any Node.js edge runtime.
</p>
</div>

<div class="section">
<h1>📑 Table of Contents</h1>
<ul>
<li>🏷️ Project Title</li>
<li>🧾 Executive Summary</li>
<li>📑 Table of Contents</li>
<li>🧩 Project Overview</li>
<li>🎯 Objectives & Goals</li>
<li>✅ Acceptance Criteria</li>
<li>💻 Prerequisites</li>
<li>⚙️ Installation & Setup</li>
<li>🔗 API Documentation</li>
<li>🖥️ UI / Frontend</li>
<li>🔢 Status Codes</li>
<li>🚀 Features</li>
<li>🧱 Tech Stack & Architecture</li>
<li>🛠️ Workflow & Implementation</li>
<li>🧪 Testing & Validation</li>
<li>🔍 Validation Summary</li>
<li>🧰 Verification Testing Tools</li>
<li>🧯 Troubleshooting & Debugging</li>
<li>🔒 Security & Secrets</li>
<li>☁️ Deployment</li>
<li>⚡ Quick-Start Cheat Sheet</li>
<li>🧾 Usage Notes</li>
<li>🧠 Performance & Optimization</li>
<li>🌟 Enhancements & Features</li>
<li>🧩 Maintenance & Future Work</li>
<li>🏆 Key Achievements</li>
<li>🧮 High-Level Architecture</li>
<li>🗂️ Project Structure</li>
<li>🧭 How to Demonstrate Live</li>
<li>💡 Summary, Closure & Compliance</li>
</ul>
</div>

<div class="section">
<h1>🧩 Project Overview</h1>
<p>
The application consists of a browser-based UI (<strong>app/page.tsx</strong>) and a server-side
search service (<strong>app/api/search/route.ts</strong>).
Users submit a search query which is validated, normalized, scored against all records in the dataset,
sorted by relevance, and returned as a ranked JSON payload. The UI renders the response dynamically
using fetch-based asynchronous calls.
</p>
</div>

<div class="section">
<h1>🎯 Objectives & Goals</h1>
<ul>
<li>Provide deterministic keyword-based ranking</li>
<li>Return only the top 3 most relevant records</li>
<li>Support case-insensitive matching</li>
<li>Expose summary and source references in JSON</li>
<li>Implement a responsive, debounced user interface</li>
</ul>
</div>

<div class="section">
<h1>✅ Acceptance Criteria</h1>
<table>
<tr><th>Rule</th><th>Requirement</th></tr>
<tr><td>Ranking</td><td>“trust badges” returns id=1 as highest relevance</td></tr>
<tr><td>Limit</td><td>Only 3 records maximum returned</td></tr>
<tr><td>Validation</td><td>Empty query returns HTTP 400</td></tr>
<tr><td>No Matches</td><td>Returns empty array with message</td></tr>
</table>
</div>

<div class="section">
<h1>💻 Prerequisites</h1>
<table>
<tr><th>Component</th><th>Requirement</th></tr>
<tr><td>Node.js</td><td>18+</td></tr>
<tr><td>npm</td><td>9+</td></tr>
<tr><td>OS</td><td>Windows 10/11 or Linux/macOS</td></tr>
<tr><td>Port</td><td>3000</td></tr>
</table>
</div>

<div class="section">
<h1>⚙️ Installation & Setup</h1>
<ol>
<li>Install Node.js and npm</li>
<li>Clone the GitHub repository</li>
<li>Run npm install</li>
<li>Run npm run dev</li>
<li>Open http://localhost:3000</li>
</ol>
</div>

<div class="section">
<h1>🔗 API Documentation</h1>
<table>
<tr><th>Property</th><th>Description</th></tr>
<tr><td>Endpoint</td><td>POST /api/search</td></tr>
<tr><td>Input</td><td>JSON { query: string }</td></tr>
<tr><td>Output</td><td>results[], summary, sources[]</td></tr>
</table>
</div>

<div class="section">
<h1>🖥️ UI / Frontend</h1>
<ul>
<li>Single page: app/page.tsx</li>
<li>Uses fetch() to call API</li>
<li>Debounce logic prevents excess calls</li>
<li>Displays loading, empty, error and results states</li>
<li>Styles controlled via Tailwind in globals.css</li>
</ul>
</div>

<div class="section">
<h1>🔢 Status Codes</h1>
<table>
<tr><th>Code</th><th>Meaning</th></tr>
<tr><td>200</td><td>Success</td></tr>
<tr><td>400</td><td>Empty query</td></tr>
<tr><td>500</td><td>Server error</td></tr>
</table>
</div>

<section>
<h2>🚀 Features</h2>

<p>
The Mini Full-Stack Search Application is designed as a lightweight but production-grade search engine.  
Each feature is implemented with deterministic behavior, scalable architecture, and frontend-backend orchestration.
</p>

<table>
<tr><th>Layer</th><th>Feature</th><th>Technical Description</th></tr>

<tr>
<td>Frontend</td>
<td>Debounced Real-Time Search</td>
<td>User keystrokes are debounced before API invocation to prevent excessive server calls and improve UX responsiveness.</td>
</tr>

<tr>
<td>Backend</td>
<td>Relevance-Scored Search Engine</td>
<td>Each dataset item is scored based on keyword frequency and match weight across title and body fields.</td>
</tr>

<tr>
<td>API</td>
<td>Stateless JSON Contract</td>
<td>POST endpoint returns deterministic JSON with results, sources, and optional summary fields.</td>
</tr>

<tr>
<td>Data</td>
<td>In-Memory Indexed Dataset</td>
<td>Records stored in data/data.ts are loaded once per request and processed in-memory for fast evaluation.</td>
</tr>

<tr>
<td>UX</td>
<td>Loading, Empty, Error States</td>
<td>Frontend renders distinct UI states for pending, success, empty, and error responses.</td>
</tr>

<tr>
<td>Deployment</td>
<td>Serverless Ready</td>
<td>API routes are compatible with Vercel Edge and Node runtimes for elastic scaling.</td>
</tr>
</table>

<pre>
User Typing
    │
    ▼
Debounce Timer
    │
    ▼
POST /api/search
    │
    ▼
Scoring Engine → Ranking → JSON
    │
    ▼
UI Rendering
</pre>
</section>

<section>
<h2>🧱 Tech Stack & Architecture</h2>

<table>
<tr><th>Layer</th><th>Technology</th><th>Responsibility</th></tr>
<tr><td>UI</td><td>Next.js, TypeScript, Tailwind</td><td>User interface, input handling, rendering</td></tr>
<tr><td>API</td><td>Next.js Route Handlers</td><td>Validation, scoring, ranking, JSON response</td></tr>
<tr><td>Runtime</td><td>Node.js / Edge</td><td>Execution of serverless functions</td></tr>
<tr><td>Data</td><td>TypeScript Dataset</td><td>Source of searchable records</td></tr>
<tr><td>Build</td><td>Vercel / Next.js Compiler</td><td>Bundle, deploy, optimize</td></tr>
</table>

<pre>
┌──────────────────────┐
│  Browser (User)      │
└─────────┬────────────┘
          │
          ▼
┌──────────────────────┐
│  Next.js Frontend    │
│  (app/page.tsx)      │
└─────────┬────────────┘
          │ fetch()
          ▼
┌──────────────────────┐
│  API Route           │
│  /api/search         │
└─────────┬────────────┘
          │
          ▼
┌──────────────────────┐
│  Scoring Engine      │
│  data/data.ts        │
└──────────────────────┘
</pre>
</section>


<h2>🛠️ Workflow & Implementation</h2>

<ol>
<li>User enters a search term in the UI input field.</li>
<li>Debounce logic waits for typing to pause.</li>
<li>Frontend sends POST request to /api/search.</li>
<li>API validates that query is not empty.</li>
<li>Dataset is loaded from data/data.ts.</li>
<li>Each record is scored against query tokens.</li>
<li>Results are sorted by score descending.</li>
<li>Top 3 results are selected.</li>
<li>JSON response is generated with results, summary, and sources.</li>
<li>UI renders results dynamically.</li>
</ol>

<pre>
Input → Debounce → API Call → Validation → Scoring → Ranking → JSON → UI
</pre>
</section>

<div class="section">
<h1>🧪 Testing & Validation</h1>
<table>
<tr><th>ID</th><th>Area</th><th>Command</th><th>Expected</th><th>Explanation</th></tr>
<tr><td>T1</td><td>API</td><td>POST trust</td><td>id=1</td><td>Top relevance</td></tr>
<tr><td>T2</td><td>API</td><td>POST empty</td><td>400</td><td>Validation</td></tr>
<tr><td>T3</td><td>UI</td><td>FORM</td><td>Results</td><td>Case-insensitive</td></tr>
</table>
</div>

<div class="section">
<h1>🔍 Validation Summary</h1>
<p>All acceptance criteria verified through UI, cURL, and API inspection.</p>
</div>

<div class="section">
<h1>🧰 Verification Testing Tools & Command Examples</h1>
<ul>
<li>Browser DevTools</li>
<li>cURL</li>
<li>Network Inspector</li>
</ul>
</div>

<div class="section">
<h1>🧯 Troubleshooting & Debugging</h1>
<ul>
<li>404 errors indicate incorrect route path</li>
<li>405 indicates wrong HTTP method</li>
<li>Module errors indicate import path issues</li>
<li>Restart Next.js server to clear cache</li>
</ul>
</div>

<div class="section">
<h1>🔒 Security & Secrets</h1>
<p>No secrets or external APIs. Future integrations must use .env with gitignore.</p>
</div>

<div class="section">
<h1>☁️ Deployment</h1>
<ul>
<li>Push to GitHub</li>
<li>Connect repo to Vercel</li>
<li>Automatic serverless build and deploy</li>
</ul>
</div>

<div class="section">
<h1>⚡ Quick-Start Cheat Sheet</h1>
<table>
<tr><th>Action</th><th>Command</th></tr>
<tr><td>Install</td><td>npm install</td></tr>
<tr><td>Run</td><td>npm run dev</td></tr>
<tr><td>Test</td><td>POST /api/search</td></tr>
</table>
</div>

<div class="section">
<h1>🧾 Usage Notes</h1>
<ul>
<li>Always send POST requests</li>
<li>Query must not be empty</li>
<li>UI auto-updates results</li>
</ul>
</div>

<div class="section">
<h1>🧠 Performance & Optimization</h1>
<ul>
<li>Debounce reduces request volume</li>
<li>In-memory dataset ensures low latency</li>
<li>Edge deployment minimizes network hops</li>
</ul>
</div>

<div class="section">
<h1>🌟 Enhancements & Features</h1>
<ul>
<li>Fuzzy search engines</li>
<li>Database persistence</li>
<li>Result highlighting</li>
<li>Analytics</li>
</ul>
</div>

<div class="section">
<h1>🧩 Maintenance & Future Work</h1>
<ul>
<li>Move to database</li>
<li>Add CI/CD</li>
<li>Add monitoring</li>
</ul>
</div>

<div class="section">
<h1>🏆 Key Achievements</h1>
<ul>
<li>100% compliance with spec</li>
<li>Production-ready architecture</li>
<li>Clean modular code</li>
</ul>
</div>

<section>
<h2>🧮 High-Level Architecture</h2>

<pre>
User
  │
  ▼
Web Browser
  │
  ▼
Next.js UI (page.tsx)
  │
  ▼
POST /api/search
  │
  ▼
Route Handler
  │
  ▼
Dataset Loader
  │
  ▼
Scoring Engine
  │
  ▼
Ranking & Slicing
  │
  ▼
JSON Response
  │
  ▼
UI Rendering
</pre>

<p>
This flow ensures strict separation of concerns: UI, API, data processing, and response formatting.
</p>
</section>


<section>
<h2>🗂️ Project Structure</h2>

<pre>
mini-fullstack-search-app/
│
├── app/
│   ├── api/
│   │   └── search/
│   │       └── route.ts        → Backend search logic
│   │
│   ├── layout.tsx             → App shell
│   ├── page.tsx               → Search UI
│   ├── globals.css            → Tailwind + global styles
│   └── favicon.ico
│
├── data/
│   └── data.ts                → Search dataset
│
├── public/                    → Static assets
│
├── screenshots/               → UI and validation proof
│
├── package.json               → Dependencies & scripts
├── next.config.ts             → Next.js configuration
├── tailwind.config.ts         → Tailwind setup
├── tsconfig.json              → TypeScript configuration
├── eslint.config.mjs
├── postcss.config.mjs
├── next-env.d.ts
└── technical_project_details.pdf
</pre>

<p>
This structure cleanly separates UI, API, data, and configuration, enabling maintainability and enterprise-grade scalability.
</p>
</section>

<div class="section">
<h1>🧭 How to Demonstrate Live</h1>
<ol>
<li>npm install</li>
<li>npm run dev</li>
<li>Open localhost:3000</li>
<li>Search “trust”</li>
</ol>
</div>

<div class="section">
<h1>💡 Summary, Closure & Compliance</h1>
<p>
This system fulfills all technical, architectural, and functional requirements of a modern full-stack search platform.
It demonstrates proper API design, UI-backend orchestration, performance controls, and deployment readiness.
</p>
</div>

</body>
</html>
