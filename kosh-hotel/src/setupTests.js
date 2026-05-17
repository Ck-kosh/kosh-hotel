import "@testing-library/jest-dom";

// Polyfill TextEncoder for jsdom environment
const { TextEncoder, TextDecoder } = require("util");
Object.assign(global, { TextEncoder, TextDecoder });