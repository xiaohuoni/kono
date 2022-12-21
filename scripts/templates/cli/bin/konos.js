#!/usr/bin/env node
const { join } = require("path");

const { sync } = require("@umijs/utils/compiled/cross-spawn");
const { winPath } = require("@umijs/utils");
const chalk = require("@umijs/utils/compiled/chalk").default;
const argv = process.argv.slice(2);

// 可以在这里修改自定义的配置文件
process.env.DEFAULT_CONFIG_FILES = '.konorc.ts';
process.env.KONO_PRESETS = join(__dirname, `../dist/preset`);

const konos = winPath(join(__dirname, '../node_modules/.bin/konos'));
const spawn = sync(konos, [...argv], {
	env: process.env,
	cwd: process.cwd(),
	stdio: "inherit",
	shell: true,
});

if (spawn.status !== 0) {
	console.log(chalk.red(`kono-scripts run fail`));
	process.exit(1);
}
