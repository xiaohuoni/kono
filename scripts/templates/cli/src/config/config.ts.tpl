import { IApi } from 'konos';
import { getSchemas } from './schema';

export default (api: IApi) => {
  api.describe({
    key: '{{{ name }}}:config',
  });
  const extraSchemas = getSchemas();

  for (const key of Object.keys(extraSchemas)) {
    const config: Record<string, any> = {
      schema: extraSchemas[key] || ((joi: any) => joi.any()),
    };
    api.registerPlugins([
      {
        id: `{{{ name }}}: config-${key}`,
        key: key,
        config,
      },
    ]);
  }
};
