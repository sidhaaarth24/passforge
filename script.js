const $ = (id) => document.getElementById(id);
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{};:,.?/~";
const ambiguous = new Set("il1Lo0O");
let toastTimer;

function secureIndex(max) {
  // Rejection sampling avoids modulo bias.
  const limit = Math.floor(0x100000000 / max) * max;
  const array = new Uint32Array(1);
  let value;
  do { crypto.getRandomValues(array); value = array[0]; } while (value >= limit);
  return value % max;
}
function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = secureIndex(i + 1);
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}
function selectedPools() {
  const pools = [];
  if ($("uppercase").checked) pools.push(upper);
  if ($("lowercase").checked) pools.push(lower);
  if ($("numbers").checked) pools.push(digits);
  if ($("symbols").checked) pools.push(symbols);
  const filtered = pools.map(pool => $("exclude").checked ? [...pool].filter(c => !ambiguous.has(c)).join("") : pool);
  return filtered.filter(Boolean);
}
function generatePassword() {
  const pools = selectedPools();
  const length = Number($("length").value);
  if (!pools.length) { showToast("Select at least one character type."); return; }
  if (length < pools.length) { showToast("Increase length to fit each selected character type."); return; }
  const all = pools.join("");
  const chars = pools.map(pool => pool[secureIndex(pool.length)]);
  while (chars.length < length) chars.push(all[secureIndex(all.length)]);
  const password = shuffle(chars).join("");
  $("passwordOutput").value = password;
  $("passwordOutput").type = "text";
  $("toggleVisibility").textContent = "◉";
  updateGeneratorMeter(password, pools.reduce((n,p)=>n + new Set(p).size,0));
  $("checkInput").value = password;
  analyzePassword(password);
}
function entropyFor(password) {
  let pool = 0;
  if (/[a-z]/.test(password)) pool += 26;
  if (/[A-Z]/.test(password)) pool += 26;
  if (/[0-9]/.test(password)) pool += 10;
  if (/[^a-zA-Z0-9]/.test(password)) pool += 33;
  return password.length * Math.log2(Math.max(pool, 1));
}
function updateGeneratorMeter(password, poolSize) {
  const bits = password.length * Math.log2(poolSize);
  const score = Math.min(100, Math.round(bits / 1.2));
  $("generatorStrength").textContent = score >= 85 ? "Excellent strength" : score >= 65 ? "Strong password" : score >= 40 ? "Fair strength" : "Weak password";
  $("generatorBits").textContent = `${Math.round(bits)} bits entropy`;
  $("generatorMeter").style.width = `${score}%`;
  $("generatorMeter").style.background = score >= 65 ? "var(--accent)" : score >= 40 ? "#e5c76b" : "#e27a70";
}
function crackEstimate(bits) {
  // Illustrative estimate at 10 billion guesses/second, not a guarantee.
  const seconds = Math.pow(2, bits) / 1e10;
  if (seconds < 1) return "Less than a second";
  const units = [["years",31557600],["days",86400],["hours",3600],["minutes",60],["seconds",1]];
  for (const [name,size] of units) if (seconds >= size) {
    const amount = seconds / size;
    if (!Number.isFinite(amount)) return "Effectively infeasible";
    return `${amount >= 100 ? amount.toExponential(1) : Math.round(amount).toLocaleString()} ${name}`;
  }
  return "Less than a second";
}
const common = new Set(["password","password1","123456","123456789","12345678","qwerty","abc123","letmein","admin","welcome","iloveyou","monkey","dragon","111111","000000"]);
function analyzePassword(password) {
  if (!password) {
    $("score").textContent = "—"; $("strengthLabel").textContent = "Not checked yet";
    $("entropy").textContent = "Entropy: —"; $("crackTime").textContent = "Estimated crack time: —";
    $("checkerMeter").style.width = "0%";
    ["ruleLength","ruleUpper","ruleLower","ruleNumber","ruleSymbol","ruleCommon"].forEach(id => setRule(id, null));
    return;
  }
  const checks = {
    ruleLength: password.length >= 12,
    ruleUpper: /[A-Z]/.test(password),
    ruleLower: /[a-z]/.test(password),
    ruleNumber: /[0-9]/.test(password),
    ruleSymbol: /[^A-Za-z0-9]/.test(password),
    ruleCommon: !common.has(password.toLowerCase()) && !/(.)\1{3,}/.test(password) && !/^(1234|abcd|qwer)/i.test(password)
  };
  Object.entries(checks).forEach(([id,pass]) => setRule(id, pass));
  const bits = entropyFor(password);
  let score = Math.min(100, Math.round(bits * 1.15));
  score += Object.values(checks).filter(Boolean).length * 3;
  if (!checks.ruleCommon) score -= 25;
  score = Math.max(0, Math.min(100, score));
  const label = score >= 80 ? "Very strong" : score >= 60 ? "Strong" : score >= 35 ? "Fair" : "Weak";
  $("score").textContent = score;
  $("strengthLabel").textContent = label;
  $("strengthLabel").style.color = score >= 60 ? "var(--accent)" : score >= 35 ? "#e5c76b" : "#e58b80";
  $("checkerMeter").style.width = `${score}%`;
  $("checkerMeter").style.background = score >= 60 ? "var(--accent)" : score >= 35 ? "#e5c76b" : "#e27a70";
  $("entropy").textContent = `Entropy: ~${Math.round(bits)} bits`;
  $("crackTime").textContent = `Estimated crack time: ${crackEstimate(bits)}`;
}
function setRule(id, pass) {
  const item = $(id); item.classList.toggle("pass", pass === true);
  item.querySelector(".rule-icon").textContent = pass === true ? "✓" : pass === false ? "×" : "–";
  if (pass === false) item.querySelector(".rule-icon").style.color = "#df8b80";
  else item.querySelector(".rule-icon").style.color = "";
}
function showToast(message) {
  const toast = $("toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  $("themeToggle").textContent = "◐";
  $("themeToggle").setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  $("themeToggle").setAttribute("aria-pressed", String(!isDark));
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#0b1712" : "#f2f7f3";
  localStorage.setItem("passforge-theme", theme);
}
applyTheme(localStorage.getItem("passforge-theme") === "light" ? "light" : "dark");
$("themeToggle").addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
$("length").addEventListener("input", e => $("lengthValue").textContent = e.target.value);
$("generateButton").addEventListener("click", generatePassword);
$("checkInput").addEventListener("input", e => analyzePassword(e.target.value));
$("toggleVisibility").addEventListener("click", () => {
  const input = $("passwordOutput"); input.type = input.type === "password" ? "text" : "password";
});
$("checkVisibility").addEventListener("click", () => {
  const input = $("checkInput"); input.type = input.type === "password" ? "text" : "password";
});
$("copyButton").addEventListener("click", async () => {
  const value = $("passwordOutput").value;
  if (!value) { showToast("Generate a password first."); return; }
  try { await navigator.clipboard.writeText(value); showToast("Password copied to clipboard."); }
  catch { $("passwordOutput").select(); showToast("Select and copy your password."); }
});
document.querySelectorAll('.check input').forEach(input => input.addEventListener('change', () => {
  if (input.id !== "exclude") return;
  // Keep the current password visible; the next generation uses the updated setting.
}));
generatePassword();
