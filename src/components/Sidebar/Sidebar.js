import './Sidebar.less'

const Sidebar = ({ editor }) => {
  if (!editor) return null

  return (
    <div className="sidebar">
      <button
        className={editor.isActive('bold') ? 'active' : ''}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <b>B</b>
      </button>
      <button
        className={editor.isActive('italic') ? 'active' : ''}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i>I</i>
      </button>
      <button
        className={editor.isActive('underline') ? 'active' : ''}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <u>U</u>
      </button>
      <button
        className={editor.isActive('strike') ? 'active' : ''}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <s>S</s>
      </button>
      <button
        className={editor.isActive('codeBlock') ? 'active' : ''}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        {`</>`}
      </button>
    </div>
  )
}

export default Sidebar
