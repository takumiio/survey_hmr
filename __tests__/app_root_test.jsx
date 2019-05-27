require("./test_helper.js");
import React from "react";
import { shallow } from "enzyme";

import AppRoot from "../src/app_root.jsx";

describe("<AppRoot />", () => {
  it("renders an '.title'", () => {
    const wrapper = shallow(<AppRoot />);
    expect(wrapper.find('.title').length).toBe(1);
  });
});
