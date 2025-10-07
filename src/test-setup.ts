Object.defineProperty(globalThis, 'CSS', { value: null });
Object.defineProperty(globalThis, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});

Object.defineProperty(globalThis, 'document', {
  value: globalThis.document
});

Object.defineProperty(globalThis, 'requestAnimationFrame', {
  value: (fn: any) => setTimeout(fn, 16)
});

Object.defineProperty(globalThis, 'cancelAnimationFrame', {
  value: globalThis.clearTimeout
});

Object.defineProperty(globalThis, 'DocumentFragment', {
  value: globalThis.DocumentFragment || function DocumentFragment() {}
});