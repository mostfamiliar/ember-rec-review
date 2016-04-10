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
      },
      editStudio(studio, params) {
      Object.keys(params).forEach(function(key) {
           if(params[key] !== undefined) {
             studio.set(key, params[key]);
        }
      });
       studio.save();
       this.transitionTo('admin');
     }
   }
});
