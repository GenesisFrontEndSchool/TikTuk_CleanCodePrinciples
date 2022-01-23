import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import React from "react";
import App from "../App.js";

xdescribe('Verify ability to set likes', () => {
    let likeIconElement;
  
    beforeEach(() => {
      render(<App />);
      likeIconElement = screen.getAllByTestId("like")[0];
    })
  
    it("should be red like icon color after like button click", () => {
      let likeIconColor = window.getComputedStyle(likeIconElement).color;
      expect(likeIconColor).toBe('gray')
      userEvent.click(likeIconElement)
      likeIconColor = window.getComputedStyle(likeIconElement).color;
      expect(likeIconColor).toBe('red')
    })
  
    it("should be counted +1 like after like button click", () => {
      const likeCountElement = screen.getAllByTestId("like-count")[0];
      const likesNumber = Number(likeCountElement.textContent);
      userEvent.click(likeIconElement)
      const likesNumberClicked = Number(likeCountElement.textContent);
      expect(likesNumberClicked).toBe(likesNumber + 1)
    })
  })
  