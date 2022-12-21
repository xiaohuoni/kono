import { IApi, InitType } from 'konos';
import { join } from 'path';

export default (api: IApi) => {
  api.describe({
    key: 'inits:config',
  });

  api.registerInit({
    key: 'config',
    name: '{{{ name }}} config',
    description: '初始化 {{{ name }}} Config',
    template: join(__dirname, '..', '..', 'templates', 'config'),
    type: 'init' as InitType.init,
  });
};
