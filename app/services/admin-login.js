import Ember from 'ember';

export default Ember.Service.extend({
  logins: ['admin'],
    includes(admin) {
      return this.get('logins').includes(admin);
    }
  
});
