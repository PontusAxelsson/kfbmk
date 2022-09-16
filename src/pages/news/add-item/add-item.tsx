import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { $getRoot, $getSelection, EditorState, EditorThemeClasses } from "lexical";
import TextEditor from "../../../components/text-editor/text-editor"

let theme: EditorThemeClasses = {
	heading: {h1:'H1'}
}

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!
function onChange(editorState: EditorState) {
	editorState.read(() => {
		// Read the contents of the EditorState here.
		const root = $getRoot();
		const selection = $getSelection();

		console.log(root, selection);
	});
}

function onError(error: Error) {
	console.error(error);
}

export const AddItem = () => {
	const initialConfig = {
		theme,
		onError,
	};
	return (
		<LexicalComposer initialConfig={initialConfig}>
			<PlainTextPlugin
				contentEditable={<ContentEditable />}
				placeholder={<div>Enter some text...</div>}
			/>
			<OnChangePlugin onChange={onChange} />
		</LexicalComposer>
	)
}

export default AddItem;
