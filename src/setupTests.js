// jest-dom adds custom matchers for asserting on DOM nodes,
// e.g. expect(element).toBeInTheDocument()
import '@testing-library/jest-dom/vitest';

// jsdom has no window.matchMedia, which react-responsive needs.
// Pretend every media query matches so both layouts render in tests.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: true,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() { return false; },
  });
}
