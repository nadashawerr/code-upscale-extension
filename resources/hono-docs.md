# 2026 Modern Development & Framework Standards

## Architectural Principles

- **Immutability**: Prefer `const` over `let`. Avoid mutating objects; use the spread operator (`...`) to create updated copies.
- **Early Returns**: Use guard clauses to handle errors or edge cases at the start of functions to reduce nested `if` statements.
- **Functional Patterns**: Use `.map()`, `.filter()`, and `.reduce()` instead of traditional `for` loops where appropriate.

## Type Safety & Schema

- **Strong Typing**: Use TypeScript interfaces or types for all function inputs and outputs.
- **Validation**: If handling external data, suggest using Zod for schema validation.

## Framework Best Practices (Hono/Modern Web)

- **Standard Web APIs**: Leverage `Request`, `Response`, and `URL` objects.
- **Async/Await**: Use clean async patterns. Avoid "callback hell" or unhandled promise rejections.
- **Context Awareness**: When using Hono, utilize the `Context` object (`c`) for handling JSON responses (`c.json()`) and status codes.

## Documentation

- **Documentation**: Use a single-line // comment at the top for complex logic; avoid multi-line JSDoc blocks to keep output concise.
