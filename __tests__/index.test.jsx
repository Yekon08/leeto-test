import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../src/pages/index";
import List from "../src/components/events/List";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { fakeData } from "../__mocks__/fakeEvents";

describe("Home", () => {
  const server = setupServer(
    rest.get("http://localhost:3001/events", (req, res, ctx) => {
      return res(ctx.json(fakeData));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Événements");
  });

  it("should render 3 events", async () => {
    render(<List />);

    expect(screen.queryByText("Chargement ...")).toBeInTheDocument();
    await screen.findByRole("heading", { name: "Cours de yoga" });
    expect(screen.queryByText("Chargement ...")).not.toBeInTheDocument();
    expect(screen.getAllByRole("heading")).toHaveLength(3);

    expect(
      screen.getByRole("heading", { name: "Cours de yoga" })
    ).toHaveTextContent("Cours de yoga");
  });

  it("should disable card if past filter is selected", async () => {
    render(<List />);

    expect(screen.queryByText("Chargement ...")).toBeInTheDocument();
    await screen.findByRole("heading", { name: "Cours de yoga" });
    expect(screen.queryByText("Chargement ...")).not.toBeInTheDocument();
    expect(screen.getAllByRole("heading")).toHaveLength(3);

    fireEvent.click(screen.getByRole("button", { name: "Passés" }));

    expect(screen.getByText("22")).toHaveStyle(`color: #BFBFBF;`);
  });
});
