# konos

## 安装

```bash
pnpm i konos
```

## 使用

比如基于 konos 构建一个自己的 cli ： xiaohuoni

1、增加配置 package.json

```json
{
  "name": "xiaohuoni",
  "bin": {
    "xiaohuoni": "bin/xiaohuoni.js"
  },
  "files": [
    "dist",
    "bin",
    "templates"
  ],
  "dependencies": {
    "@umijs/utils": "^4.0.12",
    "konos": "^0.0.2",
  },
}

```

2、新建 `bin/xiaohuoni.js`

```bash
#!/usr/bin/env node
const { join } = require('path');

const { sync } = require('@umijs/utils/compiled/cross-spawn');
const chalk = require('@umijs/utils/compiled/chalk').default;
const argv = process.argv.slice(2);

process.env.KONO_PRESET = join(__dirname, `../src/preset`);

const spawn = sync(
  'konos',
  [...argv],
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

```

3、编写插件集

```ts
import { logger } from '@umijs/utils';
import { IApi } from './types';

export default (api: IApi) => {
  api.onStart(() => {
    logger.ready('welcome to xiaohuoni world!');
  });
  return {
    plugins: [
      // inits
      require.resolve('./inits/umiplugin'),
    ].filter(Boolean),
  };
};
```

4、编写插件

```ts
import { prompts } from '@umijs/utils';
import { join } from 'path';
import { IApi, InitType } from '../types';

export default (api: IApi) => {
  api.describe({
    key: 'inits:umiplugin',
  });

  api.registerInit({
    key: 'umiplugin',
    name: 'Umi Plugin',
    description: '初始化 Umi 插件',
    template: join(__dirname, '..', '..', 'templates', 'plugin'),
    type: InitType.init,
    questions: [
      {
        name: 'name',
        type: 'text',
        message: `What's the plugin name?`,
      },
      {
        name: 'description',
        type: 'text',
        message: `What's your plugin used for?`,
      },
      {
        name: 'mail',
        type: 'text',
        message: `What's your email?`,
      },
      {
        name: 'author',
        type: 'text',
        message: `What's your name?`,
      },
      {
        name: 'org',
        type: 'text',
        message: `Which organization is your plugin stored under github?`,
      },
      {
        type: 'select',
        name: 'registry',
        message: 'Pick Bpm Registry',
        choices: [
          {
            title: 'npm',
            value: 'https://registry.npmjs.org/',
            selected: true,
          },
          { title: 'taobao', value: 'https://registry.npmmirror.com' },
        ],
      },
    ] as prompts.PromptObject[],
  });
};
```

5、创建对应的模版文件

新建文件夹 templates/plugin 下面放上你的模版

6、执行 `npx xiaohuoni init`

> 发包之后，执行命令不需要 npx

```bash
npx xiaohuoni init
ready - welcome to xiaohuoni world!
? Pick init type › - Use arrow-keys. Return to submit.
❯   Umi Plugin -- 初始化 Umi 插件
```

