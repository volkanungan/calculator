import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';

describe('Calculator', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  it('shows 0 as a result on first load', () => {
    expect(
      screen.getByRole('heading', {
        name: /result/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByTestId('result').textContent).toBe('0');
  });

  it('shows the result for valid calculations', async () => {
    const inputTextbox = screen.getByRole('textbox', {
      name: /input/i,
    });
    await userEvent.type(inputTextbox, '2 5 +');
    expect(screen.getByTestId('result').textContent).toBe('7');

    // clear input field
    await userEvent.type(inputTextbox, '{Control>}A{/Control}{Delete}');
    expect(screen.getByTestId('result').textContent).toBe('0');

    await userEvent.type(inputTextbox, '2 7 + 15 * 2 /');
    expect(screen.getByTestId('result').textContent).toBe('67.5');
  });

  it('shows error message for invalid input', async () => {
    const inputTextbox = screen.getByRole('textbox', {
      name: /input/i,
    });
    await userEvent.type(inputTextbox, '2 5');
    expect(screen.getByTestId('result').textContent).toBe('');
    expect(
      screen.getByText(
        /invalid input: missing operators for some of the operands/i
      )
    ).toBeInTheDocument();

    // clear input field
    await userEvent.type(inputTextbox, '{Control>}A{/Control}{Delete}');
    expect((await screen.findByTestId('result')).textContent).toBe('0');

    await userEvent.type(inputTextbox, '+');
    expect(screen.getByTestId('result').textContent).toBe('');
    expect(
      screen.getByText(/invalid input: operands not given before operator +/i)
    ).toBeInTheDocument();

    // clear input field
    await userEvent.type(inputTextbox, '{Control>}A{/Control}{Delete}');
    expect((await screen.findByTestId('result')).textContent).toBe('0');

    await userEvent.type(inputTextbox, 'a');
    expect(screen.getByTestId('result').textContent).toBe('');
    expect(screen.getByText(/invalid input: a/i)).toBeInTheDocument();
  });
});
