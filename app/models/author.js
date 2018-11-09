import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  picture: DS.attr('string'),
  phonenumber: DS.attr('string'),
  address: DS.attr('string'),
  books: DS.hasMany()
});
