import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
export default function TextEditor() {
const editor=useRef(null)
const [content,setContent] = useState('')
return (
  <JoditEditor
    ref={editor}
    value={content}
    onChange={(newContent) => setContent(newContent)}
  />
);}