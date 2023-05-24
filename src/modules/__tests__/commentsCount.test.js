import getItemComments from '../getComments.js';

const MOCK_COMMENTS = [{ username: 'pedro', comment: 'hello' }, { username: 'juan', comment: 'good movie' }];

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_COMMENTS),
}));

describe('Comments counter test:', () => {
  let comments;
  beforeEach(async () => {
    comments = await getItemComments(1);
  });

  it('The length of the comments array must be equal to the comments count.', () => {
    expect(comments.comentsData.length).toEqual(comments.count);
  });
});