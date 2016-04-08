import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        user: this.get('user'),
        date: this.get('date'),
        rating: this.get('rating'),
        body: this.get('body'),
        band: this.get('body')
      };
      this.sendAction('saveReview', params);
    }
  }
});
