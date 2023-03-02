import React, { useState } from "react";

function TreeNode({ val, left, right }) {
  return (
    <ul className="node">
      <li>
        <p className="node-label">{val}</p>
        <ul>
          {left ? <li> {left && <TreeNode {...left} />}</li> : ""}
          {right ? <li> {right && <TreeNode {...right} />}</li> : ""}
        </ul>
      </li>
    </ul>
  );
}

function BinaryTree({ input, setInput }) {
  const [root, setRoot] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setRoot(buildTree(input));
  }

  function buildTree(str) {
    if (!str) return null;
    const values = str.split(" ");
    const root = { val: values.shift(), left: null, right: null };
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      const leftVal = values.shift();
      if (leftVal) {
        node.left = { val: leftVal, left: null, right: null };
        queue.push(node.left);
      }
      const rightVal = values.shift();
      if (rightVal) {
        node.right = { val: rightVal, left: null, right: null };
        queue.push(node.right);
      }
    }
    return root;
  }

  function handleChange(e) {
    setInput(e.target.value);
    setRoot(buildTree(input));
  }

  return (
    <div className="binary-tree">
      <form onSubmit={handleSubmit}>
        <label>
          Enter a binary tree in the format "value,left,right":
          <br />
          <input type="text" value={input} onChange={(e) => handleChange(e)} />
        </label>
        {/* <button type="submit">Build Tree</button> */}
      </form>
      <div className="flex-tree-container">
        {root && <TreeNode {...root} />}
      </div>
    </div>
  );
}

export default BinaryTree;
