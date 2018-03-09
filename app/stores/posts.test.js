import PostStore from './posts';

/* Finally polyfill */
Promise.prototype.finally = function (cb) {
  const res = () => this;
  const fin = () => Promise.resolve(cb()).then(res);
  return this.then(fin, fin);
};

describe('postStore', () => {
  const api = {
    all: jest.fn().mockImplementation(() => new Promise(resolve => resolve({ posts: [{ slug: 'abc' }] }))),
  };

  it('calls api', () => {
    const store = new PostStore(api);

    store.loadPosts();

    expect(api.all.mock.calls.length).toBe(1);
  });
});
