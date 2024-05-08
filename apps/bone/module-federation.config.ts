import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'bone',
  exposes: {
    './Routes': 'apps/bone/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
