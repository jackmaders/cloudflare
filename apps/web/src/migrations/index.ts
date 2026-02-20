import * as migration_20260220_181630 from './20260220_181630';

export const migrations = [
  {
    up: migration_20260220_181630.up,
    down: migration_20260220_181630.down,
    name: '20260220_181630'
  },
];
