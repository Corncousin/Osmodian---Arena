import { describe, expect, it } from 'vitest';

import { PROJECT_VERSION } from '../src/shared/project-version.js';

describe('PROJECT_VERSION', () => {
  it('exposes a version string', () => {
    expect(PROJECT_VERSION).toBe('0.1.0');
  });
});
