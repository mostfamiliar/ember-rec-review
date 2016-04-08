import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addReview() {
      var params = {
        user: this.get('user'),
        date: Date(),
        rating: this.get('rating'),
        body: this.get('body'),
        band: this.get('band'),
        studio: this.get('studio')
      };
      this.sendAction('saveReview', params);
    }
  }
});
