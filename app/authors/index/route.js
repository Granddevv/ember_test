import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('author');
  },
  actions: {
    deleteItem(id) {
      this.store.findRecord('author', id, { backgroundReload: false }).then(function(post) {
        post.destroyRecord();
      });
    }
  }
});
