import { prompts } from '@umijs/utils';
import { join } from 'path';
import { IApi, InitType } from '../types';

export default (api: IApi) => {
  api.describe({
    key: 'inits:cli',
  });

  api.registerInit({
    key: 'cli',
    name: 'cli',
    description: '初始化框架包',
    template: join(__dirname, '..', '..', 'templates', 'cli'),
    type: InitType.init,
    questions: [
      {
        name: 'name',
        type: 'text',
        message: `What's the cli name?`,
      },
    ] as prompts.PromptObject[],
  });
};
