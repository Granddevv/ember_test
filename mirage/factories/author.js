import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Jason ${i}`; },
  picture(i) { return `http://google.com/${i}`},
  address(i) { return `US Los Angels ${i}`},
  phonenumber(i) { return `+19273282372${i}`}
});
