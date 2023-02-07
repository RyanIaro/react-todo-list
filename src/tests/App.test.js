/*ny.hasina@hei.school
TP:UNIT TEST-STD21025
07-02-23 23h59
*/

import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
