// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { getLineContext } from "./lineContext";
import { promptRefactor } from './ui';
import { Upscale } from "./llm";

const upscale = new Upscale();

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "upscale-team" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const suggest = vscode.commands.registerCommand(
    "upscale-team.upscale",
    async () => {
      const ctx = getLineContext();
      if (!ctx) return;

      const result = await upscale.refactorCode(ctx.line, ctx.language);
      vscode.window.showInformationMessage(result);
    },
  );

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('upscale-team.helloWorld', () => {

		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Upscale!');
		
	});
	
	promptRefactor();
	
	context.subscriptions.push(disposable);
  	context.subscriptions.push(suggest);
}


// This method is called when your extension is deactivated
export function deactivate() {}
