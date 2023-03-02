import React from "react";
import { shallow } from "enzyme";
import BinaryTree from "./Tree";

describe("BinaryTree", () => {
  it("renders a form and a tree container", () => {
    const wrapper = shallow(<BinaryTree input="" setInput={() => {}} />);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find(".flex-tree-container")).toHaveLength(1);
  });

  it("builds a binary tree when the form is submitted", () => {
    const wrapper = shallow(<BinaryTree input="1 2 3" setInput={() => {}} />);
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault: () => {} });
    const treeNode = wrapper.find("TreeNode");
    expect(treeNode.props().val).toEqual("1");
    expect(treeNode.props().left.val).toEqual("2");
    expect(treeNode.props().right.val).toEqual("3");
  });
});
