import { h } from 'preact';
import HolidayInfo from './holidayInfo.component';
import {render, fireEvent } from '@testing-library/preact'
import response from '../test_data/response';
import {MULTISELECT} from '../consts/multiselect';

const onChange = jest.fn(x => x);


describe('Holiday Info testing', () => {
    it('should display the input correctly and behaves correctly', async () => {
      const holiday = response.holidays[0];

      const {getByTestId, getByText, queryByTestId } = render(<HolidayInfo data-testid='multiselect' {...holiday}/>);
      
      const container = getByTestId('holiday-info');
      const totalprice = getByTestId('totalprice');
      const pricepp = getByTestId('pricepp');
      const departuredate = getByTestId('departuredate');
      const clubmiles = queryByTestId('clubmiles');
      const virginpoints = getByTestId('virginpoints');
      const tiremiles = getByTestId('tiremiles');

      const totalpriceValue = getByText('£4919.64 Total');
      const priceppValue = getByText('£2459.82 P/P');
      const departuredateValue = getByText('2022-06-01');
      const virginpointsValue = getByText('9839 Virgin Points');
      const tiremilesValue = getByText('180 Tier Miles');


      expect(container).not.toBe(null);
      expect(container).not.toBe(null);
      expect(totalprice).not.toBe(null);
      expect(pricepp).not.toBe(null);
      expect(departuredate).not.toBe(null);
      expect(clubmiles).toBe(null);
      expect(virginpoints).not.toBe(null);
      expect(tiremiles).not.toBe(null);
      expect(totalpriceValue).not.toBe(null);
      expect(priceppValue).not.toBe(null);
      expect(departuredateValue).not.toBe(null);
      expect(virginpointsValue).not.toBe(null);
      expect(tiremilesValue).not.toBe(null);
    })
})