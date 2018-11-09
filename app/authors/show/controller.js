import Controller from '@ember/controller';

export default Controller.extend({
  editFlag: true,

  actions: {
    setEdit(name, picture, id) {
      this.set('editFlag', true);
      this.store.findRecord('author', id).then(function(item) {
        item.set('name', name);
        item.set('picture', picture);
        item.save();
      });
    },
    setVisible() {
      this.set('editFlag', false);
    }
  }
});
