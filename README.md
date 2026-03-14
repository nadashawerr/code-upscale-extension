# Upscale

EDIT AS YOU GO

Highlight a line of code. Get an instant suggestion to improve it. Apply it in one click.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Team Setup (Read This First)

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ — check with `node -v`
- [VS Code](https://code.visualstudio.com/)
- An Anthropic API key — get one at [console.anthropic.com](https://console.anthropic.com)

### Clone and Install

```bash
git clone https://github.com/nadashawerr/code-upscale-extension.git
cd code-upscale-extension
npm install
```

### Compile

```bash
- npm run compile
```

### Run the Extension

Press **F5** in VS Code (or **fn + F5** on Mac if F5 doesn't work).

This opens a second VS Code window called the **Extension Development Host**. Your extension is live in that window. Test everything in there, not in your main window.

To stop it: **Shift + F5**, or just close the second window.

### Configure the Extension

In the Extension Development Host window:

1. Open **Settings** (`Cmd+,` on Mac / `Ctrl+,` on Windows)
2. Search for **Upscale**
3. Fill in:

| Setting            | What to put                                                 |
| ------------------ | ----------------------------------------------------------- |
| `upscale.apiKey`   | Your Anthropic API key                                      |
| `upscale.docsUrl`  | URL of the docs to reference (e.g. `https://hono.dev/docs`) |
| `upscale.docsText` | Or paste docs content directly if no URL                    |

---

## Project Structure

Each person owns one file. Don't edit someone else's file without checking with them first.

```bash
src/
├── extension.ts      # Person 1 — entry point, wires everything together
├── types.ts          # Person 1 — shared interfaces, everyone imports from here
├── lineContext.ts    # Person 2 — grabs the highlighted line and surrounding context
├── docs.ts           # Person 3 — loads documentation from URL or pasted text
├── llm.ts            # Person 4 — calls the Anthropic API, parses the response
└── ui.ts             # Person 5 — displays the suggestion, handles Apply/Copy/Dismiss
```

---

## Git Workflow

```bash
git checkout -b yourname/feature
git add .
git commit -m "feat: what you did"
git push origin yourname/feature
```

Open a PR, Person 1 merges into main. Never push directly to main.

---

## Heads Up

- Run `npm run compile` after every change, or use `npm run watch` to auto-compile on save
- If your changes aren't showing, recompile and restart the extension host (Shift+F5 → F5)
- Test your file with hardcoded fake data — you don't need the full pipeline to work on your piece

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of Upscale
