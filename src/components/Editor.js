import React, { useState, useMemo } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

const Editor = ({ initialValue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialValue);
  const [highlightedParagraph, setHighlightedParagraph] = useState(null);

  const renderElement = ({ attributes, children, element }) => {
    if (element.type === 'paragraph') {
      const isHighlighted = highlightedParagraph === element;
      const style = {
        outline: '1px solid black',
        backgroundColor: isHighlighted ? 'yellow' : 'white',
      };

      const handleClick = () => {
        console.log(element.children[0].text);
        setHighlightedParagraph(isHighlighted ? null : element);
      };

      return (
        <p {...attributes} style={style}>
          {children}
          <button onClick={handleClick}>Action</button>
        </p>
      );
    }

    return <p {...attributes}>{children}</p>;
  };

  return (
    <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
      <Editable renderElement={renderElement} />
    </Slate>
  );
};

export default Editor;
