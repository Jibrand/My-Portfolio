// jest-dom adds custom jest matchers for asserting on DOM nodes.
// https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// jsdom does not implement matchMedia or IntersectionObserver, both of which the
// theme and navigation code touch. Provide minimal stand-ins so component tests
// exercise real component code rather than mocked components.

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

if (!window.IntersectionObserver) {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  };
}

// jsdom defines scrollTo/scrollIntoView but throws "Not implemented", so these
// have to be replaced rather than only defined when missing.
Object.defineProperty(window, "scrollTo", { value: () => {}, writable: true });
Object.defineProperty(window, "scroll", { value: () => {}, writable: true });
Object.defineProperty(Element.prototype, "scrollIntoView", {
  value: () => {},
  writable: true,
  configurable: true,
});
