import { Service as CoreService } from '@umijs/core';
import { DEFAULT_CONFIG_FILES, FRAMEWORK_NAME } from '../constants';
import { getCwd } from './cwd';

let defaultConfigFiles = DEFAULT_CONFIG_FILES;

if(process.env.DEFAULT_CONFIG_FILES){
  defaultConfigFiles = process.env.DEFAULT_CONFIG_FILES.split(',');
}

export class Service extends CoreService {
  constructor(opts?: any) {
    const cwd = getCwd();
    super({
      ...opts,
      env: process.env.NODE_ENV,
      cwd,
      defaultConfigFiles: defaultConfigFiles || opts.defaultConfigFiles,
      frameworkName: FRAMEWORK_NAME || process.env.FRAMEWORK_NAME,
      presets: [require.resolve('../prepreset'), ...(opts?.presets || [])],
    });
  }

  async run2(opts: { name: string; args?: any }) {
    let name = opts.name;
    if (opts?.args.version || name === 'v') {
      name = 'version';
    } else if (opts?.args.help || !name || name === 'h') {
      name = 'help';
    }
    return await this.run({ ...opts, name });
  }
}
