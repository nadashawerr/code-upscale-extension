import * as vscode from 'vscode';
import { LineContext, Suggestion } from "./types";
import { getLineContext } from './lineContext';
const { fileName } = require('./lineContext');

const codeSuggestion: Suggestion = {
    original: fileName,
    improved: fileName,
    explanation: "Yes because better.",
};

// await showSuggestion(codeSuggestion);

export function showWarningWithActions() {

	// Checks if UI works
	console.log('UI Active');

	// Temp
	console.log(codeSuggestion.improved + ' ' + codeSuggestion.original);

	const left = encodeURI(codeSuggestion.original);
	const right = encodeURI(codeSuggestion.improved);

	// Template Notification for Now
	const showWarning = vscode.commands.registerCommand('upscale-team.showWarningWithActions', 
		async () => { 		
		const selection = await vscode.window.showWarningMessage('Outdated code detected. Refactor?', 'Yes', 'No');

		if (selection !== undefined) {
			console.log(`User selected: ${selection}`);
			if (selection == `Yes`) {
				console.log(`Refactoring code...`);
				await vscode.commands.executeCommand('vscode.diff', left, right, 'Refactor');
			}
		}	

    });

}
