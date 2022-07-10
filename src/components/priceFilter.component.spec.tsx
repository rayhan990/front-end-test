import { h } from 'preact';
import PriceFilter from './pricefilter.component';
import {render, fireEvent } from '@testing-library/preact'
import response from '../test_data/response';
import {MULTISELECT} from '../consts/multiselect'; 

const handleChange = jest.fn();

describe('Price Filter testing', () => {
    it('should display the input correctly and behaves correctly', async () => {
      const {getByTestId, getByText, queryByTestId } = render(<PriceFilter minValue={10} maxValue={20} handleChange={handleChange}/>);
      
      const container = getByTestId('price-filter-container');
      const minLabel = getByTestId('min-label');
      const maxLabel = getByTestId('max-label');
      const minValue = getByTestId('min-value');
      const maxValue = getByTestId('max-value');
      
      // const minValueContent = getByText('10');
      // const maxValueContent = getByText('20');

      expect(container).not.toBe(null);
      expect(minLabel).not.toBe(null);
      expect(maxLabel).not.toBe(null);
      expect(minValue).not.toBe(null);
      expect(maxValue).not.toBe(null);

      fireEvent.change(minValue, {target: {value: '23'}});
      fireEvent.change(maxValue, {target: {value: '31'}});

      expect(handleChange).toHaveBeenCalledTimes(2)
    })
})