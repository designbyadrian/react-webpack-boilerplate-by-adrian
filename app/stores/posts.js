import { observable, action, computed } from 'mobx';

export default class PostStore {
  @observable isLoading = false;
  @observable postRegistry = observable.map();

  @computed get posts() {
    return this.postRegistry.values();
  }

  constructor(api) {
    this.api = api;
  }

  getPost(slug) {
    return this.postRegistry.get(slug);
  }

  @action loadPosts() {
    this.isLoading = true;

    return this.api.all()
      .then(action(({ posts, count }) => {
        this.postRegistry.clear();
        posts.forEach(post => this.postRegistry.set(post.slug, post));
        this.totalPagesCount = count;
      }))
      .finally(action(() => { this.isLoading = false; }));
  }

  @action loadPost(slug, { acceptCached = false } = {}) {
    if (acceptCached) {
      const post = this.getPost(slug);
      if (post) return Promise.resolve(post);
    }
    this.isLoading = true;
    return this.api.get(slug)
      .then(action(({ post }) => {
        this.postRegistry.set(post.slug, post);
        return post;
      }))
      .finally(action(() => { this.isLoading = false; }));
  }
}
