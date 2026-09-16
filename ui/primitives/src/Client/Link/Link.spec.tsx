import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Link } from "./Link";

describe("Link Primitive", () => {
  it("renders with default variant classes", () => {
    render(<Link href="/test">Click me</Link>);
    const link = screen.getByRole("link", { name: "Click me" });
    expect(link).toBeDefined();
    expect(link.className).toContain("text-slate-200");
  });

  it("applies variant classes correctly", () => {
    render(
      <Link href="/button" variant="button">
        Button Link
      </Link>,
    );
    const link = screen.getByRole("link", { name: "Button Link" });
    expect(link.className).toContain("bg-slate-100");
  });
});
