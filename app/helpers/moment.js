import Ember from 'ember';

export function moment(params) {
  if(params[0] !== undefined) {
    return moment(params[0]).format('MM-DD-YYYY');
  }

}

export default Ember.Helper.helper(moment);
