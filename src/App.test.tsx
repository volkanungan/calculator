import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import App from './App';
import { CREDENTIALS } from './components/Login';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('renders login screen on first load', () => {
    expect(
      screen.getByRole('heading', { name: /login to the calculator/i })
    ).toBeInTheDocument();
  });

  it('logs the user in with correct credentials', async () => {
    expect(
      screen.getByRole('heading', { name: /login to the calculator/i })
    ).toBeInTheDocument();

    const usernameTextBox = screen.getByLabelText(/username/i);
    const passwordTextBox = screen.getByLabelText(/password/i);

    await userEvent.type(usernameTextBox, '{Control>}A{/Control}{Delete}');
    await userEvent.type(passwordTextBox, '{Control>}A{/Control}{Delete}');

    await userEvent.type(usernameTextBox, CREDENTIALS.username);
    await userEvent.type(passwordTextBox, CREDENTIALS.password);

    await userEvent.click(
      screen.getByRole('button', {
        name: /log in/i,
      })
    );
    expect(
      await screen.findByRole('heading', { name: /result/i })
    ).toBeInTheDocument();
  });

  it('shows a warning and does not log in for wrong credentials', async () => {
    expect(
      screen.getByRole('heading', { name: /login to the calculator/i })
    ).toBeInTheDocument();

    const usernameTextBox = screen.getByLabelText(/username/i);
    const passwordTextBox = screen.getByLabelText(/password/i);

    await userEvent.type(usernameTextBox, '123');
    await userEvent.type(passwordTextBox, '456');

    await userEvent.click(
      screen.getByRole('button', {
        name: /log in/i,
      })
    );
    expect(
      screen.getByText(/invalid username or password\./i)
    ).toBeInTheDocument();

    waitFor(() =>
      expect(screen.queryByRole('heading', { name: /result/i })).toBeNull()
    );
  });
});
