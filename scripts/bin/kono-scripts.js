#!/usr/bin/env node
const { join } = require('path');

const { sync } = require('@umijs/utils/compiled/cross-spawn');
const chalk = require('@umijs/utils/compiled/chalk').default;
const argv = process.argv.slice(2);

process.env.KONO_PRESET = join(__dirname, `../src/localpreset`);

const spawn = sync(
  'tsx',
  [join(__dirname, `../src/cli.ts`), ...argv],
  {
    env: process.env,
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true
  }
);

if (spawn.status !== 0) {
  console.log(chalk.red(`kono-scripts run fail`));
  process.exit(1);
}
