import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import './Editor.css'

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: '',
  })

  if (!editor) return null

  return (
    <div className="editor-container">
      <div className="sidebar">
        <button onClick={() => editor.chain().focus().toggleBold().run()}>
          <b>B</b>
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>
          <i>I</i>
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <u>U</u>
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}>
          <s>S</s>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >{`</>`}</button>
      </div>

      <div className="editor-wrapper">
        <EditorContent editor={editor} />
        <button className="send-button">Send</button>
      </div>
    </div>
  )
}

export default Editor
