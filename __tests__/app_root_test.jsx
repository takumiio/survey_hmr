require("./test_helper.js");
import React from "react";
import { shallow, mount } from "enzyme";

import AppRoot from "../src/app_root.jsx";

describe("<AppRoot />", () => {
  it("renders an '.title'", () => {
    const wrapper = shallow(<AppRoot />);
    expect(wrapper.find('.title').length).toBe(1);
  });

  it("viewd when focus textbox", () => {
    const wrapper = mount(<AppRoot />);
    expect(wrapper.find(".input_title").length).toBe(1);
    const input = wrapper.find(".input_title");
    expect(input.is(":focus")).toEqual(true)
  });
});
