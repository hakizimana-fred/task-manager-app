import { render, cleanup } from '@testing-library/react';
import App from '../App';

beforeEach(cleanup);

it('should take a snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot(); 
});
