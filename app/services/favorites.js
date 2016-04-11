import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],
  add(studio) {
    this.get('favorites').pushObject(studio);
  }
});
