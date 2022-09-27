import { logger } from '@umijs/utils';
import { IApi } from './types';

export default (api: IApi) => {
  api.onStart(() => {
    logger.ready('welcome to xiaohuoni world!');
  });
  return {
    plugins: [
      // commands
      require.resolve('./commands/help'),
      require.resolve('./commands/init'),
    ].filter(Boolean),
  };
};
