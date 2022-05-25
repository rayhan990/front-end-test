import { h } from 'preact';
import StarFilter from './starFilter.component';
import {render, fireEvent, screen} from '@testing-library/preact'


const ratings = [undefined, 1,2,3,4,5];
const handleChange = jest.fn(x => x);

describe('StarFilter', () => {
    it('should display the input correctly', async () => {
      const {container} = render(<StarFilter starRatings={ratings} handleChange={handleChange}/>);

      expect(container.querySelectorAll('span')).toHaveLength(6);
      expect(container.querySelectorAll('label')).toHaveLength(6);
      expect(container.querySelectorAll('input')).toHaveLength(6);
    })

    it('Check state change and parent function called', () => {
      const {getByTestId} = render(<StarFilter starRatings={ratings} handleChange={handleChange}/>);

      const checkbox = getByTestId('star-filter-checkbox0') as HTMLInputElement;
      fireEvent.click(checkbox)
      
      expect(checkbox.checked).toBe(false)
      expect(handleChange).toHaveBeenCalledTimes(1)
    })
})