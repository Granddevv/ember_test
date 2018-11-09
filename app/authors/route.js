import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('author');
  },
  setupController: function(controller, model){
    controller.set('model',model);
  }
});
