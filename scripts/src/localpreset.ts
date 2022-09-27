import { logger } from '@umijs/utils';
import { IApi } from './types';

export default (api: IApi) => {
  api.onStart(() => {
    logger.ready('It only work when local.');
  });
  return {
    plugins: [
      // commands
      require.resolve('./commands/bootstrap'),

      // inits
      require.resolve('./inits/package'),

      // generators
      require.resolve('./generators/prettier'),
      require.resolve('./generators/tsconfig'),
    ].filter(Boolean),
  };
};
