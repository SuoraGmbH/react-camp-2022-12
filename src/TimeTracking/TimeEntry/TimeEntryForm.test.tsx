import { render, screen, within } from "@testing-library/react";
import TimeEntryForm from "./TimeEntryForm";
import userEvent from "@testing-library/user-event";
import { TimeEntry } from "./TimeEntry";

describe("<TimeEntryForm />", () => {
  test("Smoke Test", () => {
    render(<TimeEntryForm onAddTimeEntry={function () {}} />);
  });

  test("if you don't submit, the event should fire", () => {
    const handleAddTimeEntryMock = jest.fn();

    render(<TimeEntryForm onAddTimeEntry={handleAddTimeEntryMock} />);

    const commentInput = screen.getByRole("textbox", {
      name: /comment:/i,
    });

    userEvent.type(commentInput, "React Testing gelernt");

    expect(handleAddTimeEntryMock).not.toHaveBeenCalled();
  });

  test(
    "after entering a comment and " +
      "clicking the submit button, the event should be fired",
    () => {
      const handleAddTimeEntryMock = jest.fn();

      render(<TimeEntryForm onAddTimeEntry={handleAddTimeEntryMock} />);

      // screen.debug();
      // screen.logTestingPlaygroundURL();

      const commentInput = screen.getByRole("textbox", {
        name: /comment:/i,
      });

      userEvent.type(commentInput, "React Testing gelernt");
      userEvent.click(
        screen.getByRole("button", {
          name: /submit/i,
        })
      );

      expect(handleAddTimeEntryMock).toHaveBeenCalled();
    }
  );
  test(
    "after entering a comment and " +
      "pressing enter, the event should be fired",
    () => {
      const now = new Date("2022-12-14 10:08:00");
      jest.useFakeTimers().setSystemTime(now);

      const handleAddTimeEntryMock = jest.fn();

      render(<TimeEntryForm onAddTimeEntry={handleAddTimeEntryMock} />);

      // screen.debug();
      // screen.logTestingPlaygroundURL();

      const commentInput = screen.getByRole("textbox", {
        name: /comment:/i,
      });

      userEvent.type(commentInput, "React Testing gelernt{enter}");

      expect(handleAddTimeEntryMock).toHaveBeenCalled();
      expect(handleAddTimeEntryMock).toHaveBeenCalledWith(
        expect.objectContaining({
          comment: "React Testing gelernt",
        })
      );

      expect(handleAddTimeEntryMock).toHaveBeenCalledWith({
        id: "2022-12-14T09:08:00.000Z",
        comment: "React Testing gelernt",
        start: now,
        end: now,
      } as TimeEntry);

      expect(handleAddTimeEntryMock.mock.calls[0][0]).toMatchInlineSnapshot(`
        Object {
          "comment": "React Testing gelernt",
          "end": 2022-12-14T09:08:00.000Z,
          "id": "2022-12-14T09:08:00.000Z",
          "start": 2022-12-14T09:08:00.000Z,
        }
      `);
    }
  );
});
