import { describe, expect, it } from "vitest";

import { App } from "./app.js";

describe("App", () => {
  it("is defined", () => {
    expect(App).toBeTypeOf("function");
  });
});
