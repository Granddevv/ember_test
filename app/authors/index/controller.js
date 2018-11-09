import Controller from '@ember/controller';

export default Controller.extend({
  listObject: '',
  init() {
    this._super();
    this.filterOption();
  },
  filterOption: function () {
    var filter_title = this.get('title');
    var filter_option = this.get('filter');
    var filter;
    if(filter_option == 'name') {
      filter = {
        name: filter_title
      }
    } else if(filter_option == 'address') {
      filter = {
        address: filter_title
      }
    } else {
      filter = {
        phonenumber: filter_title
      }
    }

    if(filter_title !== '') {
      this.get('store').query('author', filter).then((filteredResults) => {
        return this.set('listObject', filteredResults);
      });
    } else {
      this.store.findAll('author').then((filteredResults) => {
        return this.set('listObject', filteredResults);
      });
    }

  },
  actions: {
    filteChange(value) {
      this.filterOption();
    },
    filterToggled(choice) {
      var filter_title = this.get('title');
      this.set('filter', choice);
      this.filterOption();
    }
  }
});
