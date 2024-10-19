import React, { useState, useMemo } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

const Editor = ({ initialValue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialValue);

  return (
    <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
      <Editable
        renderElement={({ attributes, children }) => (
          <p {...attributes} style={{ outline: '1px solid black' }}>
            {children}
          </p>
        )}
      />
    </Slate>
  );
};

export default Editor;
