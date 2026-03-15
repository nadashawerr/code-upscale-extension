import * as vscode from 'vscode';
import { LineContext } from "./types";

export function getLineContext(): LineContext | undefined {
    // Get the active text editor, stops if there isn't one (e.g., no file open)
    // Prevents crashing when trying to access properties of undefined
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return undefined;
    }

    const document = editor.document;
    const selection = editor.selection;
    // Captures exactly what is highlighted
    // If nothing is highlighted, this will just be an empty string
    const highlightedText = document.getText(selection);

    // Fallback: If the user hasn't highlighted anything, grab the current line
    const finalSelection = highlightedText.length > 0
        ? highlightedText
        : document.lineAt(selection.active.line).text;

    // Grabbing context around the current line, 3 lines before and after, 
    // ensuring we don't go out of bounds of the document at the same time
    const startLine = Math.max(0, selection.start.line - 3);
    const endLine = Math.min(document.lineCount - 1, selection.end.line + 3);

    const surroundingText = document.getText(
        new vscode.Range(startLine, 0, endLine, document.lineAt(endLine).text.length)
    );

    const result = {
        line: finalSelection,
        surrounding: surroundingText,
        // Tells the AI what language it's looking at
        language: document.languageId,
        // Shortens the path name to just the file name
        fileName: document.fileName.split(/[\\/]/).pop() || document.fileName
    };
    return result;

}