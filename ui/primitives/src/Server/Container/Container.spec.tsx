import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "./Container";

describe("Container Primitive", () => {
  it("renders with default max-w-7xl", () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstChild).toBeDefined();
    expect((container.firstChild as HTMLElement).className).toContain("max-w-7xl");
    expect((container.firstChild as HTMLElement).className).toContain("mx-auto");
  });
});
