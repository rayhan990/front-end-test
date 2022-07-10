import { h } from 'preact';
import HotelContent from './hotelContent.component';
import {render, fireEvent } from '@testing-library/preact'
import response from '../test_data/response';
import {MULTISELECT} from '../consts/multiselect';

describe('Holiday Content testing', () => {
    it('should display the input correctly and behaves correctly', async () => {
      const content = response.holidays[0].hotel.content;
      
      const {getByTestId, getByText, queryByTestId } = render(<HotelContent {...content}/>);
      
      const contentElem = getByTestId('hotel-content');
      const contentElemValue = getByText((content, element) => content.startsWith('Has two of'));

      expect(contentElem).not.toBe(null);
      expect(contentElemValue).not.toBe(null);
    })
})