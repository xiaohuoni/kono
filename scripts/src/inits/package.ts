import { prompts } from '@umijs/utils';
import { join } from 'path';
import { IApi, InitType } from '../types';

export default (api: IApi) => {
  api.describe({
    key: 'inits:pkg',
  });

  api.registerInit({
    key: 'pkg',
    name: 'package',
    description: '初始化子包',
    template: join(__dirname, '..', '..', 'templates', 'package'),
    type: InitType.init,
    questions: [
      {
        name: 'name',
        type: 'text',
        message: `What's the package name?`,
      },
    ] as prompts.PromptObject[],
  });
};
