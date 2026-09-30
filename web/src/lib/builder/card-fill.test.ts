import { describe, expect, it } from "vitest";
import { cardHeaderFills } from "./card-fill";

describe("cardHeaderFills", () => {
  it("keeps an ordinary primary in both themes", () => {
    expect(cardHeaderFills("#3182f6", "#ffffff")).toEqual({ light: "#3182f6", dark: "#3182f6", substituted: false });
  });

  it("shows a dark canvas behind a white primary in the light theme (lemonbase)", () => {
    expect(cardHeaderFills("#ffffff", "#111111")).toEqual({ light: "#111111", dark: "#ffffff", substituted: true });
  });

  it("falls back to a neutral surface when a white primary sits on a white canvas", () => {
    expect(cardHeaderFills("#ffffff", "#ffffff").light).toBe("#e4e4e7");
  });

  it("shows a light canvas behind a black primary in the dark theme", () => {
    expect(cardHeaderFills("#000000", "#ffffff")).toEqual({ light: "#000000", dark: "#ffffff", substituted: true });
  });

  it("leaves a dark grey primary alone (hwahae #3d3d3d)", () => {
    expect(cardHeaderFills("#3d3d3d", "#ffffff").substituted).toBe(false);
  });
});
