import React, { useState, useMemo } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

const BasicOutliner = ({ initialValue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialValue);

  const renderElement = ({ attributes, children, element }) => {
    if (element.type === 'list-item') {
      return <li {...attributes}>{children}</li>;
    } else if (element.type === 'unordered-list') {
      return <ul {...attributes}>{children}</ul>;
    }

    return <p {...attributes}>{children}</p>;
  };

  return (
    <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
      <Editable renderElement={renderElement} />
    </Slate>
  );
};

const initialOutline = [
  {
    type: 'unordered-list',
    children: [
      {
        type: 'list-item',
        children: [{ text: 'First item' }],
      },
      {
        type: 'list-item',
        children: [
          {
            type: 'unordered-list',
            children: [
              {
                type: 'list-item',
                children: [{ text: 'Sub-item 1' }],
              },
              {
                type: 'list-item',
                children: [{ text: 'Sub-item 2' }],
              },
            ],
          },
        ],
      },
      {
        type: 'list-item',
        children: [{ text: 'Second item' }],
      },
    ],
  },
];

export { BasicOutliner, initialOutline };
