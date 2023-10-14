const express = require('express');
const secureRandom = require('secure-random');
const bip39 = require('bip39');

const app = express();
const port = 3333;

// Generate a random byte array of the specified length
function generateRandomBytes(length) {
  const randomBytes = secureRandom(length, { type: 'Buffer' });
  return randomBytes.toString('hex');
}

// Generate a new mnemonic using bip39 library
function generateMnemonic() {
  const randomBytes = generateRandomBytes(32);
  return bip39.entropyToMnemonic(randomBytes);
}

app.get('/', (req, res) => {
  const mnemonic = generateMnemonic();
  console.log("generated this mnemonic \n" + mnemonic + "\n\n")
  res.send(mnemonic);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
