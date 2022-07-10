import { h } from 'preact';
import Multiselect from './multiselect.component';
import {render, fireEvent } from '@testing-library/preact'
import response from '../test_data/response';
import {MULTISELECT} from '../consts/multiselect';



describe('Multiselect testing', () => {
    it('should display the input correctly and behaves correctly', async () => {
      const options = response.holidays[0].hotel.content.hotelFacilities.map(x => { return {label : x, value : x} });
      const onChange = jest.fn(x => x);

      const {getByTestId, getByText } = render(<Multiselect data-testid='multiselect' options={options} onChange={onChange}/>);
      
      const elem = getByTestId('multiselect');
      const option = getByText(MULTISELECT.DefaultSelection);
      const entry = getByText('Room Service');

      expect(elem).not.toBe(null);
      expect(option).not.toBe(null);
      expect(entry).not.toBe(null);

      fireEvent.click(entry);
      expect(onChange).toBeCalled();
    })
})