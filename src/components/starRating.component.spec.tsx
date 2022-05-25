import { h } from 'preact';
import StarRating from './starRating.component';
import {render, within } from '@testing-library/preact'

const mock = jest.fn();

const handleChange = jest.fn();


describe('Star Ratings', () => {
    it('should display the input correctly', async () => {
      const {getByTestId, container, getByText, queryAllByRole} = render(<StarRating rating={5}/>);

      expect(getByTestId('rating')).not.toBe(null);
      expect(getByText('5')).not.toBe(null);
    })
})