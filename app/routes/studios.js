import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      studios: this.store.findAll('studio')
    });
  },
  actions: {
    addToFavorites(studio) {
      this.get('favorites').add(studio);
    }
  }
});
