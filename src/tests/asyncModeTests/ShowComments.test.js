import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import React from "react";
import App from "../../App.js";

/** 
 * This test suite is designed 
 * for app working in async mode
 * (without mock data)
 */
describe('Verify application work in async mode', () => {
    describe('Verify ability to show comments', () => {
      it("should be present show comments button", async () => {
        render(<App />);
        const syncElements = screen.queryAllByText(/Show Comments/i);
        expect(syncElements).toEqual([]);
        const asyncElements = await waitFor(() => screen.getAllByText(/Show Comments/i), { timeout: 4000 });
        expect(asyncElements.length).toBe(30);
      }, 6000)
    })
  })
  