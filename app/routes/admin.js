import Ember from 'ember';

export default Ember.Route.extend({

    model() {
      return Ember.RSVP.hash({
        studios: this.store.findAll('studio'),
        reviews: this.store.findAll('review')
      });
    },
    actions: {
      saveStudio(params) {
        var newStudio = this.store.createRecord('studio', params);
        newStudio.save();
        this.transitionTo('admin');
      }
    }
});
