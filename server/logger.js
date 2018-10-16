/* eslint-disable one-var, no-console */

const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {

  // Called whenever there's an error on the server we want to print
  error: err => {
    console.error(chalk.red(err));
  },

  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, tunnelStarted) => {
    console.log(`${chalk.green('✓')} Server started`);

    // If the tunnel started, log that and the URL it's available at
    if (tunnelStarted) {
      console.log(`${chalk.green('✓')} Tunnel initialised`);
    }

    console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
(tunnelStarted ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}` : '')}${divider}
${chalk.gray(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },
};

module.exports = logger;
