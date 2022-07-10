import { h } from 'preact';
import HolidayTopbar from './holidayTopbar.component';
import {render, fireEvent } from '@testing-library/preact'
import response from '../test_data/response';
import {MULTISELECT} from '../consts/multiselect';

const onChange = jest.fn(x => x);


describe('Holiday Info testing', () => {
    it('should display the input correctly and behaves correctly', async () => {
      const hotel = response.holidays[0].hotel;

      const {getByTestId, getByText, queryByTestId } = render(<HolidayTopbar {...hotel}/>);
      
      const title = getByTestId('holiday-topbar-title');
      const subtitle = getByTestId('holiday-topbar-subtitle');

      const titlevalue = getByText((content, element) => content.startsWith('The Beekman'));
      const subtitlevalue = getByText((content, element) => content.startsWith('5'));

      expect(title).not.toBe(null);
      expect(subtitle).not.toBe(null);

      expect(titlevalue).not.toBe(null);
      expect(subtitlevalue).not.toBe(null);
    })
})