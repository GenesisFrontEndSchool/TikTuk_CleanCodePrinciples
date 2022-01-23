import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App.js";

xdescribe('Verify elements presence in the document', () => {
  beforeEach(() => {
    render(<App />);
  })

  it("should be header banner elemnet present", () => {
      const bannerElement = screen.getByRole('banner');
      expect(bannerElement).toBeInTheDocument();
  })

  it('should be 30 feed item cards rendered', () => {
    const feedItemCardElements = screen.getAllByTestId("feed-item-card");
    expect(feedItemCardElements.length).toBe(30);
  });

  it('should be 30 user avatars rendered', () => {
    const avatarElements = screen.getAllByRole("img");
    expect(avatarElements.length).toBe(30);
  });

  it('should be 30 video rendered', () => {
    const videoElements = screen.getAllByTestId("user-video-post");
    expect(videoElements.length).toBe(30);
  });

  it('should be 30 video descriptions rendered', () => {
    const videoDescriptionElements = screen.getAllByTestId("description");
    expect(videoDescriptionElements.length).toBe(30);
  });
    
  it('should be 30 "Like" buttons rendered', () => {
    const likeButtonElements = screen.getAllByTestId("like");
    expect(likeButtonElements.length).toBe(30);
  });

  it('should be 30 like count labels rendered', () => {
    const likeCountLabelsElements = screen.getAllByTestId("like-count");
    expect(likeCountLabelsElements.length).toBe(30);
  });

  it('should be 30 "Show Comments" buttons rendered', () => {
    const commentButtonElements = screen.getAllByText(/Show Comments/i);
    expect(commentButtonElements.length).toBe(30);
  });
})

