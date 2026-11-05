import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LikeButton from './LikeButton';
import { LikesProvider } from '../context/LikesContext';

describe('LikeButton', () => {
  it('shows the new like count after a click', async () => {
    // arrange
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>,
    );
    const button = screen.getByRole('button', { name: /like/i });
    expect(button).toHaveTextContent('Like (0)');

    // act
    await userEvent.click(button);

    // assert
    expect(button).toHaveTextContent('Like (1)');
  });
});