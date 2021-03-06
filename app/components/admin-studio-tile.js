import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editStudio(studio, params){
    this.sendAction('editStudio', studio, params);
    },
    deleteStudio(studio) {
      this.sendAction('deleteStudio', studio);
    }
  }
});
