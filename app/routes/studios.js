import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      studios: this.store.findAll('studio')
    });
  }
});
