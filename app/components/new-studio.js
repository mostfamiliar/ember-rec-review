import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveStudio(){
    var params = {
      name: this.get('name'),
      location: this.get('location'),
      contact: this.get('contact'),
      details: this.get('details'),
      rates: this.get('rates'),
      image: this.get('image'),
      reviews: this.get('reviews')
    };

      this.sendAction('saveStudio', params);
    }
  }
});
