import * as vscode from 'vscode';


// FROM A GIVEN EXAMPLE, USE OR DELETE LATER
// import { LineContext, Suggestion } from "./types";

// const codeSuggestion: Suggestion = {
//     original: "a",
//     improved: "b",
//     explanation: "c";
// };

// await showSuggestion(codeSuggestion);

export function showWarningWithActions() {

	// Checks if UI works
	console.log('UI Active');

	// Template Notification for Now
	const showWarning = vscode.commands.registerCommand('upscale-team.showWarningWithActions', 
		async () => { 		
		const selection = await vscode.window.showWarningMessage('Outdated code deteced. Refactor?', 'Yes', 'No');

		if (selection !== undefined) {
			vscode.window.showInformationMessage(`You selected: ${selection}`, { modal: true });
		}	

    });

}
