// 🔧 Helper: load regex patterns from /regex_rules.json and return RegExp objects
// Defaults to the 'i' flag (case-insensitive). Avoid using inline (?i) in patterns.
export async function getRegexRules() {
  const res = await fetch('/regex_rules.json');
  if (!res.ok) throw new Error('Failed to load regex_rules.json');
  const patterns = await res.json();
  if (!Array.isArray(patterns)) throw new Error('regex_rules.json must be an array of strings');
  return patterns.map((p) => new RegExp(p, 'i'));
}

export default getRegexRules;