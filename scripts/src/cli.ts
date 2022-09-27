import { printHelp, yParser } from '@umijs/utils';
import {
  checkLocal,
  checkVersion as checkNodeVersion,
  setNoDeprecation,
  setNodeTitle,
} from './node';
import { Service } from './service/service';

export async function run() {
  checkNodeVersion();
  checkLocal();
  setNodeTitle();
  setNoDeprecation();

  const args = yParser(process.argv.slice(2), {
    alias: {
      version: ['v'],
      help: ['h'],
    },
    boolean: ['version'],
  });
  try {
    await new Service().run2({
      name: args._[0],
      args,
    });
  } catch (e: any) {
    console.log(e);
    console.log(
      '如果是‘.mjs’错误，你可以尝试删除 `node_modules/.pnpm/@umijs+core@4.0.22/node_modules/@umijs/core/dist/service/plugin.js#59` 的 ‘.mjs’ 配置',
    );
    printHelp.exit();
    process.exit(1);
  }
}
run();
