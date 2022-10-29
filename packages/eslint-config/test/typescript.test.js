import { describe } from 'vitest';

import config from '../typescript';

import {
    checkLintingErrors,
    checkValidity,
    createEngine,
} from './utils';

describe('typescript config', () => {
    const engine = createEngine(config);

    checkValidity(engine);
    checkLintingErrors(engine);
});
