import { render, screen } from "@/test/test-utils";
import { Greeting } from "../Greeting";

describe("Profile Component test suite", () => {
    test("render inital text", async () => {
        // render
        render(<Greeting />);

        // query
        const head = screen.getByRole("heading");

        // assertion
        expect(head).toHaveTextContent("Profile");
    });
});
