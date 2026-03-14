import * as vscode from "vscode";
import { LineContext } from "./types";

export function getLineContext(): LineContext | null {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return null;

  const selection = editor.selection;
  if (!selection || selection.isEmpty) return null;

  const selectionRange = new vscode.Range(
    selection.start.line,
    selection.start.character,
    selection.end.line,
    selection.end.character,
  );

  return {
    line: editor.document.getText(selectionRange),
    surrounding: "",
    language: editor.document.languageId,
    fileName: editor.document.fileName.split("/").pop() || "unknown",
  };
}
