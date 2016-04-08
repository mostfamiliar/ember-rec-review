import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editStudio(studio) {
      var params = {
      name: this.get('name'),
      location: this.get('location'),
      contact: this.get('contact'),
      details: this.get('details'),
      rates: this.get('rates'),
      image: this.get('image')
    };

    this.sendAction('editStudio', studio, params);
    this.set('name', '');
    this.set('location', '');
    this.set('contact', '');
    this.set('details', '');
    this.set('rates', '');
    this.set('image', '');
  }
 }
});
