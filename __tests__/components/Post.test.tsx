import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Post from '@/components/Post';
import fetchMock from 'jest-fetch-mock';

// Simulate api call
fetchMock.enableMocks();
// Return to default after each test
beforeEach(() => {
    fetchMock.resetMocks();
});

describe('PostList', () => {
    test('renders loading state initially', async () => {
        const { getByTestId } = render(<Post />);

        await waitFor(() => expect(getByTestId('loading')).toBeTruthy());
    });

    test('renders post list after fetching', async () => {
        fetchMock.mockResponseOnce(JSON.stringify([
            { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
            { userId: 2, id: 2, title: 'Post 2', body: 'Body 2' }
        ]));

        const { getByText } = render(<Post />);

        await waitFor(() => {
            expect(fetchMock).toHaveBeenCalledTimes(1);
            expect(getByText('Post 1')).toBeTruthy();
            expect(getByText('Post 2')).toBeTruthy();
        });
    });

    test('renders no posts message when no posts are fetched', async () => {
        fetchMock.mockResponseOnce(JSON.stringify([]));

        const { getByText } = render(<Post />);

        await waitFor(() => expect(getByText('There are no posts')).toBeTruthy());
    });

    test('handles fetch error', async () => {
        fetchMock.mockReject(new Error('Failed to fetch'));

        const { getByText } = render(<Post />);

        await waitFor(() => expect(getByText('There are no posts')).toBeTruthy());
    });
});
