// use utils/request
const request = params => new Promise(resolve => {
  if (params === 'all') {
    setTimeout(() => {
      resolve({
        posts: [
          { slug: 'monkey' },
          { slug: 'banana' },
        ],
        count: 2,
      });
    }, 1000);
  } else {
    setTimeout(() => {
      resolve({
        slug: 'monkey',
      });
    }, 1000);
  }
});

const Posts = {
  all: () => request('all'),
  get: slug => request(slug),
};

export default {
  Posts,
};
