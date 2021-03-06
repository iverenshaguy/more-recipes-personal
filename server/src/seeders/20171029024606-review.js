export default {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'Reviews',
      [
        {
          rating: 4,
          comment: 'Very Good',
          userId: 1,
          recipeId: 2,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 5,
          comment: 'Excellent',
          userId: 1,
          recipeId: 6,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 3,
          comment: 'Good',
          userId: 2,
          recipeId: 1,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 5,
          comment: 'Excellent',
          userId: 2,
          recipeId: 11,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 4,
          comment: 'Very Good',
          userId: 3,
          recipeId: 10,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 5,
          comment: 'Excellent',
          userId: 3,
          recipeId: 5,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 2,
          comment: 'Okay',
          userId: 5,
          recipeId: 14,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 4,
          comment: 'Very Good',
          userId: 5,
          recipeId: 12,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 5,
          comment: 'Excellent',
          userId: 4,
          recipeId: 3,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 3,
          comment: 'Good',
          userId: 4,
          recipeId: 7,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 4,
          comment: 'Very Good',
          userId: 6,
          recipeId: 13,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 5,
          comment: 'Excellent',
          userId: 6,
          recipeId: 15,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 5,
          comment: 'Excellent',
          userId: 7,
          recipeId: 8,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 4,
          comment: 'Very Good',
          userId: 7,
          recipeId: 10,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 5,
          comment: 'Excellent',
          userId: 8,
          recipeId: 11,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 4,
          comment: 'Very Good',
          userId: 8,
          recipeId: 4,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 4,
          comment: 'Very Good',
          userId: 9,
          recipeId: 5,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 5,
          comment: 'Excellent',
          userId: 9,
          recipeId: 2,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 3,
          comment: 'Good',
          userId: 10,
          recipeId: 9,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        },
        {
          rating: 4,
          comment: 'Very Good',
          userId: 10,
          recipeId: 1,
          updatedAt: '2017-10-30T00:47:03.687Z',
          createdAt: '2017-10-30T00:47:03.687Z'
        }
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete('Reviews', null, {})
};
