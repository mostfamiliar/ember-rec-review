import Ember from 'ember';

export default Ember.Component.extend({
  adminLogin: Ember.inject.service(),
  verifyLogin: Ember.computed('adminLogin.logins.[]', function(){
    return this.get('adminLogin').includes(this)
  }),
  actions: {
    verify(){
      var username = this.get('username').includes(this);
      this.get('adminLogin').includes(username)

    }
  }
});
