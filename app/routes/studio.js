import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('studio', params.studio_id);
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var studio = params.studio;

      studio.get('reviews').addObject(newReview);
      newReview.save().then(function(){
        return studio.save();
      });
      this.transitionTo('studio');
    }
  }
});
