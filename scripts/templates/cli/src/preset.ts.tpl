import { logger } from '@umijs/utils';
import { IApi } from 'konos';

export default (api: IApi) => {
  api.onStart(() => {
    logger.ready('welcome to lingfeng!');
  });
  return {
    plugins: [
      // config
      require.resolve('./config/config'),

      // inits
      require.resolve('./inits/config'),

      // commands

      // generators
      require.resolve('konos/dist/generators/prettier'),
    ].filter(Boolean),
  };
};
