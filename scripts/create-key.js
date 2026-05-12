const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const KEYS_FILE = path.join(__dirname, 'data', 'invite_keys.json');

function generateInviteCode() {
  const prefix = "SPY";
  const segment = () => crypto.randomBytes(2).toString("hex").toUpperCase();
  return `${prefix}-${segment()}-${segment()}`;
}

// Load existing keys
let keys = [];
try {
  if (fs.existsSync(KEYS_FILE)) {
    keys = JSON.parse(fs.readFileSync(KEYS_FILE, 'utf-8'));
  }
} catch (e) {
  console.error("Could not read existing keys:", e.message);
}

// Create a new single-use key
const newKey = {
  id: crypto.randomUUID(),
  code: generateInviteCode(),
  label: "Single Use Key",
  tier: "user",
  maxUses: 1, // 1 use = single use
  usedCount: 0,
  usedBy: [],
  createdAt: new Date().toISOString(),
  expiresAt: null, // No time expiration, just usage limit
  active: true
};

keys.push(newKey);

// Save keys back to the file
fs.writeFileSync(KEYS_FILE, JSON.stringify(keys, null, 2), 'utf-8');

console.log("\nSuccessfully created a new SINGLE-USE invite key!");
console.log("--------------------------------------------------");
console.log(`Key Code: ${newKey.code}`);
console.log(`Max Uses: ${newKey.maxUses} (It will expire after 1 person uses it)`);
console.log("--------------------------------------------------\n");
