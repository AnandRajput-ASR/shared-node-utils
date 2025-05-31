# 🧰 shared-node-utils

A simple Node.js utility library with reusable helper functions for date formatting and logging.

## 📦 Installation

Clone the repo or add it as a local dependency:

```bash
npm install path/to/shared-node-utils

---

## 📚 Usage Example

1. Clone this repo into your project directory  
2. Import and use the utilities:

```js
// demo.js

const utils = require('./shared-node-utils');

// Date Utils
const today = utils.formatDate();       // e.g., "2025-05-31"
const currentTime = utils.getTimeNow(); // e.g., "4:32:10 PM"

console.log('Today:', today);
console.log('Current Time:', currentTime);

// Logger
utils.logInfo('Server started successfully.');
utils.logError('Failed to connect to database.');
