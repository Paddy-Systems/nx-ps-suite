import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header Component", () => {
  it("renders the app name and default sign-in action", () => {
    render(<Header appName="Inverse" />);
    expect(screen.getByText("Inverse")).toBeDefined();
    expect(screen.getByText("by Paddy Systems")).toBeDefined();
    expect(screen.getByRole("link", { name: "Sign In" })).toBeDefined();
  });

  it("renders custom navigation items", () => {
    const navItems = [{ label: "Docs", href: "/docs" }];
    render(<Header appName="Relay" navItems={navItems} />);
    expect(screen.getByRole("link", { name: "Docs" })).toBeDefined();
  });
});
