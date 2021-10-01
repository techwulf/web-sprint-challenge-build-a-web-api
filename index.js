require('dotenv').config();
const server = require('./api/server');

const p = process.env.PORT || 5000;

server.listen(p, () => {
  console.log(
    `╔═══════════════════════════════╗\n`+
    `║  Server running on port ${p}  ║\n`+
    `╚═══════════════════════════════╝`
  );
});
