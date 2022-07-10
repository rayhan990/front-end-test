import { h } from 'preact';
import StarRating from './starRating.component';
import {render, within } from '@testing-library/preact'

const mock = jest.fn();

const handleChange = jest.fn();


describe('Star Ratings', () => {
    it('should display the input correctly', async () => {
      const {getByTestId, container, getByText, queryAllByRole} = render(<StarRating rating={5}/>);
      const elem = getByTestId('rating');

      expect(elem).not.toBe(null);
      expect(elem.textContent).toContain('5');
    })
})