import { render } from '@testing-library/react';
import Hello from '../Hello.component';

describe('Hello', () => {
  it('renders a Hello component', () => {
    const { getByTestId } = render(<Hello name="Yannick" />);

    const rightTitle = getByTestId('helloDataTestId');

    expect(rightTitle).toBeVisible();
  });
});
