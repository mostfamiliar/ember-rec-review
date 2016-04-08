import Ember from 'ember';

export default Ember.Component.extend({
  sortedReviews: Ember.computed.sort('reviews', 'sortDefinition'),
  sortBy: 'rating',
  reverseSort: false,
  sortDefinition: Ember.computed('sortBy', 'reverseSort', function(){
    let sortOrder = this.get('reverseSort') ? 'desc' : 'asc';
    return [ `${this.get('sortBy')}:${sortOrder}` ];
  }),
});
