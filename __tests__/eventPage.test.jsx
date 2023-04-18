import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { fakeData, fakeBookings } from "../__mocks__/fakeEvents";
import EventDetails from "../src/pages/[id]";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../__mocks__/mockRouter";
import axios from "axios";

describe("Event page details", () => {
  const server = setupServer(
    rest.get("http://localhost:3001/events/3", (req, res, ctx) => {
      return res(ctx.json(fakeData[0]));
    }),
    rest.get("http://localhost:3001/bookings", (req, res, ctx) => {
      return res(ctx.json(fakeBookings));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders a heading", async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ query: { id: "3" } })}>
        <EventDetails />;
      </RouterContext.Provider>
    );

    expect(screen.queryByText("Chargement ...")).toBeInTheDocument();
    await screen.findByRole("heading", { name: "Cours de yoga" });
    expect(screen.queryByText("Chargement ...")).not.toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Cours de yoga" })
    ).toHaveTextContent("Cours de yoga");
    expect(screen.getByText("19:00 - 21:30")).toHaveTextContent(
      "19:00 - 21:30"
    );
  });

  it("renders bookings", async () => {
    render(
      <RouterContext.Provider value={createMockRouter({ query: { id: "3" } })}>
        <EventDetails />;
      </RouterContext.Provider>
    );

    await screen.findByRole("heading", { name: "Cours de yoga" });

    expect(
      screen.getByRole("heading", { name: "Liste des participants (3)" })
    ).toHaveTextContent("Liste des participants (3)");
  });

  it("delete booking", async () => {
    const deleteSpy = jest.spyOn(axios, "delete");

    render(
      <RouterContext.Provider value={createMockRouter({ query: { id: "3" } })}>
        <EventDetails />;
      </RouterContext.Provider>
    );

    await screen.findByRole("heading", { name: "Cours de yoga" });

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("nombre de tickets :")).toHaveTextContent(
      "nombre de tickets :"
    );

    fireEvent.click(
      screen.getByRole("button", { name: "supprimer ma réservation" })
    );

    expect(deleteSpy).toHaveBeenCalledTimes(1);
  });
});
