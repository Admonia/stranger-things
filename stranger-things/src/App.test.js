//Note: Tried to download Jest, too tired to really mess with this section~
//these were the tests I would have checked~
//Love Ya'll!!1



// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import AllPosts from './AllPosts';

// // Mock API functions
// jest.mock('../API', () => ({
//   fetchAllPosts: jest.fn(),
// }));

// describe('AllPosts component', () => {
//   // Mock data for posts
//   const mockPosts = [
//     {
//       _id: 'post1',
//       title: 'Post 1',
//       description: 'Description for post 1',
//       price: '$10',
//       author: { username: 'user1' },
//     },
//     {
//       _id: 'post2',
//       title: 'Post 2',
//       description: 'Description for post 2',
//       price: '$20',
//       author: { username: 'user2' },
//     },
//   ];

//   beforeEach(() => {
//     // Mock fetchAllPosts function to return mockPosts
//     jest.spyOn(require('../API'), 'fetchAllPosts').mockResolvedValue({
//       success: true,
//       data: { posts: mockPosts },
//     });
//   });

//   it('renders the AllPosts component', async () => {
//     render(<AllPosts />);

//     // Verify that loading state is shown
//     expect(screen.getByText('Loading...')).toBeInTheDocument();

//     // Wait for posts to load
//     const postElements = await screen.findAllByTestId('post-container');
//     expect(postElements).toHaveLength(2);

//     // Verify that post titles are rendered
//     expect(screen.getByText('Post 1')).toBeInTheDocument();
//     expect(screen.getByText('Post 2')).toBeInTheDocument();
//   });

//   it('allows editing and saving a post', async () => {
//     render(<AllPosts />);

//     // Wait for posts to load
//     await screen.findAllByTestId('post-container');

//     // Click the Edit button for the first post
//     fireEvent.click(screen.getByText('Edit'));

//     // Change input values
//     fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New Title' } });
//     fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'New Description' } });
//     fireEvent.change(screen.getByLabelText('Price'), { target: { value: '$30' } });

//     // Click the Save button
//     fireEvent.click(screen.getByText('Save'));

//     // Verify that updated values are displayed
//     expect(screen.getByText('New Title')).toBeInTheDocument();
//     expect(screen.getByText('New Description')).toBeInTheDocument();
//     expect(screen.getByText('$30')).toBeInTheDocument();
//   });

//   it('deletes a post', async () => {
//     render(<AllPosts />);

//     // Wait for posts to load
//     await screen.findAllByTestId('post-container');

//     // Click the Delete button for the first post
//     fireEvent.click(screen.getByText('Delete'));

//     // Verify that the post is removed from the UI
//     await screen.findByTestId('post-container', { exact: false });
//     expect(screen.queryByText('Post 1')).toBeNull();
//   });
// });

