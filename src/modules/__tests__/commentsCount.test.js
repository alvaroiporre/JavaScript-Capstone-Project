import getItemComments from '../getComments.js';

const MOCK_COMMENTS = [{ username: 'pedro', comment: 'hello' }, { username: 'juan', comment: 'good movie' }, { username: '', comments: '' }];
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
  it('should return empty comments when commentsData is empty', async () => {
    global.fetch.mockResolvedValueOnce({ json: () => Promise.resolve([]) });
    const comments = await getItemComments(1);
    expect(comments.commentsData).toEqual([]);
    expect(comments.count).toBe(0);
  });
  it('should return correct comments data', async () => {
    const expectedComments = [{ username: 'pedro', comment: 'hello' }, { username: 'juan', comment: 'good movie' }];
    global.fetch.mockResolvedValueOnce({ json: () => Promise.resolve(expectedComments) });
    const comments = await getItemComments(1);
    expect(comments.commentsData).toEqual(expectedComments.commentsData);
    expect(comments.count).toBe(expectedComments.length);
  });
});