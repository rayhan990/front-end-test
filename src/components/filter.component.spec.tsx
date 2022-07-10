import { h, JSX } from 'preact';
import Filter from './filter.component';
import { HotelContent } from '../types/booking'
import {render, fireEvent, screen } from '@testing-library/preact'
import response from '../test_data/response';

const setHolidays = jest.fn(x => x);

describe('Hotel Description', () => {
    it('should display the input correctly and behaves correctly', async () => {
      const holidays = response.holidays;

      const {getByTestId, container, getByText, getByLabelText, queryByLabelText} = render(<Filter holidays={holidays} setHolidays={setHolidays} />);

      const applyButton = getByTestId('filter-apply');
      
      expect(getByTestId('filter-component')).not.toBe(null);
      expect(getByTestId('price-filter-container')).not.toBe(null);
      expect(getByTestId('star-filter-container')).not.toBe(null);
      expect(getByTestId('multiselect')).not.toBe(null);
      expect(applyButton).not.toBe(null);

      fireEvent.click(applyButton);

      expect(setHolidays).toHaveBeenCalledTimes(1)

    })
})