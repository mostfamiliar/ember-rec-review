import Ember from 'ember';

export default Ember.Service.extend({
  list: [],
  add(studio) {
    this.get('list').pushObject(studio);
  }
});
