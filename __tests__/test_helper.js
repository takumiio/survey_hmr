import "core-js/stable";
import "regenerator-runtime/runtime";
import "isomorphic-fetch";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
