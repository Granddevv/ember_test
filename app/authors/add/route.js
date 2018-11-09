import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.set('name', '');
    this.set('picture', '');
    this.set('address', '');
    this.set('phonenumber', '');
  },
  actions: {

  }
});
