import { h, JSX } from 'preact';
import HotelDesc from './hotelDesc.component';
import { HotelContent } from '../types/booking'
import {render, fireEvent, screen } from '@testing-library/preact'
import response from '../test_data/response';

describe('Hotel Description', () => {
    it('should display the input correctly and behaves correctly', async () => {
      const hotelContent = response.holidays[0].hotel.content;

      const {getByTestId, container, getByText, getByLabelText, queryByLabelText} = render(<HotelDesc {...hotelContent} />);
      expect(getByLabelText('hotel-desc-container')).not.toBe(null);
      expect(getByText('Read More')).not.toBe(null);
      expect(queryByLabelText('hotel-description')).toBe(null);
      fireEvent.click(getByLabelText('hotel-desc-expand'));
      expect(getByText('Read Less')).not.toBe(null);

      expect(getByLabelText('hotel-description')).not.toBe(null);
    })
})