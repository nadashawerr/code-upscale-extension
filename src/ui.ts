import * as vscode from 'vscode';
import { Suggestion } from "./types";
import { getLineContext } from './lineContext';

const code = getLineContext();

export function promptRefactor() {

	// Checks if UI works
	console.log('UI Active');


	// Prompts the user if they want to refactor their code
	const promptRefactor = vscode.commands.registerCommand('upscale-team.promptRefactor', 
		async () => { 		
		const selection = await vscode.window.showWarningMessage('Outdated code detected. Refactor?', 'Yes', 'No');

		if (selection !== undefined) {
			console.log(`User selected: ${selection}`);
			if (selection == `Yes`) {
				console.log(`Refactoring code...`);
			}
		}	

    });

}
