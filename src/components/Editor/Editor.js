import './Editor.less'

const Editor = ({ EditorContent, editor }) => {
  if (!editor) return null

  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
      <button className="send-button">Send</button>
    </div>
  )
}

export default Editor
