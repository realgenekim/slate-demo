import React, { useState, useMemo } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

const BasicOutliner = ({ initialValue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(initialValue);

  const moveItem = (index, direction, parent) => {
    const newValue = [...value];
    const parentIndex = newValue.findIndex(item => item === parent);
    const [movedItem] = newValue[parentIndex].children.splice(index, 1);
    newValue[parentIndex].children.splice(index + direction, 0, movedItem);
    setValue(newValue);
  };

  const renderElement = ({ attributes, children, element }) => {
    if (element.type === 'list-item') {
      const parent = value.find(item => item.children && item.children.includes(element));
      if (!parent || !Array.isArray(parent.children)) {
        console.error('Invalid parent or children structure', parent);
        return <li {...attributes}>{children}</li>;
      }
      const index = parent.children.findIndex(item => item === element);
      return (
        <li {...attributes}>
          {children}
          <button onClick={() => moveItem(index, -1, parent)}>Move Up</button>
          <button onClick={() => moveItem(index, 1, parent)}>Move Down</button>
        </li>
      );
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
