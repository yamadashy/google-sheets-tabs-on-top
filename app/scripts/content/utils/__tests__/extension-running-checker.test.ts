import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { isAlreadyRunningExtension } from '../extension-running-checker';

describe('isAlreadyRunningExtension', () => {
  const testIdentifier = 'test-extension-identifier';
  let metaElement: HTMLMetaElement;

  beforeEach(() => {
    const metaElements = document.querySelectorAll('meta');
    for (let i = 0; i < metaElements.length; i++) {
      metaElements[i].remove();
    }
  });

  afterEach(() => {
    if (metaElement?.parentNode) {
      metaElement.parentNode.removeChild(metaElement);
    }
  });

  it('should return false when extension is not running', () => {
    const result = isAlreadyRunningExtension(testIdentifier);
    expect(result).toBe(false);
  });

  it('should return true when extension is already running', () => {
    isAlreadyRunningExtension(testIdentifier);

    const result = isAlreadyRunningExtension(testIdentifier);
    expect(result).toBe(true);
  });
});
