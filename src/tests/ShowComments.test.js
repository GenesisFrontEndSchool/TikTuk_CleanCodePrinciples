import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import React from "react";
import App from "../App.js";

xdescribe('Verify ability to show comments', () => {
    beforeEach(() => {
      render(<App />);
    })
  
    it("should not be displayed comments section by default", () => {
      const commentsSection = screen.queryAllByTestId("comments");
      expect(commentsSection).toEqual([]);
    })
  
    it("should be displayed comments and button named to 'Hide Comments' after click on 'Show Comments' button", () => {
      const showCommentsButton = screen.getAllByText(/Show Comments/i)[0];
      userEvent.click(showCommentsButton);
      expect(screen.getAllByText(/Hide Comments/i)[0]).toBeInTheDocument();
      const comments = screen.queryAllByTestId("comments");
      expect(comments).not.toEqual([]);
    })
  })