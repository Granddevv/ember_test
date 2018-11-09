import Controller from '@ember/controller';

export default Controller.extend({
  name: '',
  picture: '',
  init() {
    this._super(...arguments);
    this.set('name', '');
    this.set('picture', '');
  },

  actions: {
    addItem(name, picture, address, phonenumber ) {
      var new_recorder = this.store.createRecord('author', {name: name, picture: picture, address: address, phonenumber: phonenumber});
      new_recorder.save();
      this.set('name', '');
      this.set('picture', '');
      this.set('address', '');
      this.set('phonenumber', '');
      this.transitionToRoute('authors');
    },
    setInitValue() {

    }
  }
});
