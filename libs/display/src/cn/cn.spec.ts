import { describe, expect, it } from "vitest";
import { cn } from "./index";

describe("cn", () => {
  it("should merge class names correctly", () => {
    expect(cn("px-2 py-1", "bg-blue-500")).toBe("px-2 py-1 bg-blue-500");
  });

  it("should resolve Tailwind class conflicts", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("should handle conditional classes", () => {
    const isHidden = false;
    const isPrimary = true;
    expect(cn("base", isHidden && "hidden", isPrimary && "text-primary")).toBe("base text-primary");
  });
});
