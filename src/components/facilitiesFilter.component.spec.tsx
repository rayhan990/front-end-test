import { h } from 'preact';
import FacilitiesFilter from './facilitiesFilter.component';
import {render, fireEvent, screen } from '@testing-library/preact'
import response from '../test_data/response';



describe('Facilities filter testing', () => {
    it('should display the input correctly and behaves correctly', async () => {
      const facilities = response.holidays[0].hotel.content.hotelFacilities;
      const handleChange = jest.fn(x => x);

      const {getByTestId, getByText} = render(<FacilitiesFilter facilities={facilities} handleChange={handleChange}/>);
      const elem = getByTestId('multiselect');
      const entry = getByText('Bar');
      expect(elem).not.toBe(null);
      expect(entry).not.toBe(null);

      fireEvent.click(entry);
      expect(handleChange).toBeCalled();
    })
})