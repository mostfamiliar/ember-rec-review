import Ember from 'ember';

export default Ember.Component.extend({
  username: null,
  adminLogin: Ember.inject.service(),
  verifyLogin: Ember.computed('adminLogin.logins.[]', 'username', function(){
    return this.get('adminLogin').includes(this.get('username'));
  }),
  actions: {
    verify(){
      console.log(this.get('adminLogin.logins.[]').includes('username'));
      username: this.get('userInput');
      //
      //       console.log(this.get('adminLogin.logins.[]'));
      //       this.notifyPropertyChange('username');
      // this.get('adminLogin.logins.[]').includes(username);

    }
  }
});
