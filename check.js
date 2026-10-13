const qs = require('qs');
const out = qs.parse('a=1&b=2');
if (out.a !== '1' || out.b !== '2') { console.error('unexpected', out); process.exit(1); }
console.log('ok', require('qs/package.json').version);
