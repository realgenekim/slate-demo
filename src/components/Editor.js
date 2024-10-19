import React, { useState, useMemo } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

const Editor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'Testing 123: A line of text in a paragraph.' }],
    },
  ]);

  return (
    <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
      <Editable />
    </Slate>
  );
};

export default Editor;
