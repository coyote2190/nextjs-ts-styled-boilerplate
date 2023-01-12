import { render } from '@testing-library/react';

import Hello from '..';

describe('Hello', () => {
  it('renders a Hello component', () => {
    const { getByTestId } = render(<Hello />);

    const rightTitle = getByTestId('helloDataTestId');

    expect(rightTitle).toBeVisible();
  });
});
