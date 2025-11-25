CREATE TABLE IF NOT EXISTS contact_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  business TEXT,
  service TEXT,
  message TEXT NOT NULL,
  source TEXT
);
