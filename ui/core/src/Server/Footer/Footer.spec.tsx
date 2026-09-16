import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer Component", () => {
  it("renders copyright and default links", () => {
    render(<Footer />);
    expect(screen.getByText(/Paddy Systems. All rights reserved./)).toBeDefined();
    expect(screen.getByRole("link", { name: "Platform" })).toBeDefined();
  });
});
