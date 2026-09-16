import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button Primitive", () => {
  it("renders with default variant classes", () => {
    render(<Button>Submit</Button>);
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeDefined();
    expect(button.className).toContain("bg-white");
    expect(button.className).toContain("text-slate-950");
  });

  it("applies secondary and size variants correctly", () => {
    render(
      <Button variant="secondary" size="lg">
        Secondary Large
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Secondary Large" });
    expect(button.className).toContain("bg-slate-800");
    expect(button.className).toContain("h-12");
  });
});
