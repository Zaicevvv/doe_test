import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Editor from './components/Editor/Editor'
import Sidebar from './components/Sidebar/Sidebar'
import './App.less'

function App() {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: '',
  })

  return (
    <div className="app">
      <Sidebar editor={editor} />
      <div className="main-container">
        <div className="main-wrapper"></div>
        <Editor EditorContent={EditorContent} editor={editor} />
      </div>
    </div>
  )
}

export default App
