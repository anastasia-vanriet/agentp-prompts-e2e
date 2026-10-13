const _ = require('lodash');
const out = _.chunk([1, 2, 3, 4], 2);
if (out.length !== 2) { console.error('unexpected', out); process.exit(1); }
console.log('ok', _.VERSION);
