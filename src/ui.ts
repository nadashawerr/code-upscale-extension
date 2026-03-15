import * as vscode from "vscode";

export function promptRefactor(result: string, original: string) {
  const panel = vscode.window.createWebviewPanel(
    "upscaleResult",
    "Upscale Result",
    vscode.ViewColumn.Beside,
    {},
  );

  panel.webview.html = `
    <!DOCTYPE html>
    <html>
      <body style="font-family: monospace; padding: 20px; background: #1e1e1e; color: #d4d4d4;">
        <h2 style="color: #9cdcfe;">Original Code</h2>
        <pre style="background: #252526; padding: 16px; border-radius: 8px; overflow: auto;">${escapeHtml(original)}</pre>
        <h2 style="color: #9cdcfe;">⚡ Upscaled Code</h2>
        <pre style="background: #252526; padding: 16px; border-radius: 8px; overflow: auto;">${escapeHtml(result)}</pre>
      </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}