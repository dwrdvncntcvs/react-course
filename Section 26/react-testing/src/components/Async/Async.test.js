import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("render posts if succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: "p1", title: "First Post" },
        { id: "p2", title: "Second Post" },
      ],
    });
    render(<Async />);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
