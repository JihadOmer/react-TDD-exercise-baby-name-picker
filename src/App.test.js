import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('header', () => {
    it('should render the header', () => {
      render(<App />);
      expect(screen.getByTestId('header')).toBeVisible();
    });
    it('should be semantic HTML', () => {
      render(<App />);
      expect(screen.getByTestId('header').tagName).toBe('HEADER');
    });
    it('should show the logo', () => {
      render(<App />)
      expect(screen.getByAltText('baby-carriage-solid')).toBeVisible();
    });
    it('should add the style', () => {
      render(<App />)
      expect(screen.getByAltText('baby-carriage-solid').className).toBe('logo');
    });
    it('should add website name', () => {
      render(<App />)
      expect(screen.getByTestId('company-name')).toBeVisible()
      expect(screen.getByTestId('company-name').tagName).toBe('H3')
      expect(screen.getByTestId('company-name').textContent).toBe('Our Future...')
    });
  })
});
