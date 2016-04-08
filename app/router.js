import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('studios');
  this.route('studio', {path: '/studios/:studio_id'});
  this.route('admin');
  this.route('review');
});

export default Router;
