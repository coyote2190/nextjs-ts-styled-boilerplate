import { disableReactDevTools } from "utils/disableReactDevTools";

const MOCKED_REACT_DEVTOOLS_GLOBAL_HOOK_WINDOW_OBJECT = {
  someFunctionForReactDevTools: function someFunctionForReactDevTools(arg: number): number {
    return arg + 1;
  },
  someOtherFunctionForReactDevTools: function someOtherFunctionForReactDevTools(arg: string): string {
    return arg + "1";
  },
  someObjectForReactDevTools: {
    reactDevToolsAreLaggy: true,
  },
  someOtherObjectForReactDevTools: {
    reactDevToolsAreNotLaggy: false,
  },
};

describe("disableReactDevTools.ts should", () => {
  it("not override React window objects when disabling devtools flag is set to false", () => {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = MOCKED_REACT_DEVTOOLS_GLOBAL_HOOK_WINDOW_OBJECT;

    disableReactDevTools("false");

    expect(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.someFunctionForReactDevTools.name).toBe(
      "someFunctionForReactDevTools"
    );
    expect(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.someOtherFunctionForReactDevTools.name).toBe(
      "someOtherFunctionForReactDevTools"
    );

    expect(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.someObjectForReactDevTools).toMatchObject(
      MOCKED_REACT_DEVTOOLS_GLOBAL_HOOK_WINDOW_OBJECT.someObjectForReactDevTools
    );
    expect(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.someOtherObjectForReactDevTools).toMatchObject(
      MOCKED_REACT_DEVTOOLS_GLOBAL_HOOK_WINDOW_OBJECT.someOtherObjectForReactDevTools
    );
  });
  it("override React window objects when disabling devtools flag is set to true", () => {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = MOCKED_REACT_DEVTOOLS_GLOBAL_HOOK_WINDOW_OBJECT;

    disableReactDevTools("true");

    expect(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.someFunctionForReactDevTools.name).toBe(""); // anonymous function
    expect(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.someOtherFunctionForReactDevTools.name).toBe(""); // anonymous function

    expect(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.someObjectForReactDevTools).toBeNull();
    expect(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.someOtherObjectForReactDevTools).toBeNull();
  });
});
