import { h } from 'preact';
import Results from './results.component';
import {render, fireEvent } from '@testing-library/preact'
import response from '../test_data/response';

const handleChange = jest.fn();


describe('Star Ratings', () => {
    it('should display the input correctly', async () => {
      
      const {getByTestId, container, getByText, queryAllByLabelText} = render(<Results {...response} />);
      expect(queryAllByLabelText('result-tile')).toHaveLength(10);
      expect(getByTestId('load-more-button')).not.toBe(null);
      fireEvent.click(getByTestId('load-more-button'));

      expect(queryAllByLabelText('result-tile')).toHaveLength(20);
    })
})