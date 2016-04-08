import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  date: DS.attr(),
  rating: DS.attr(),
  body: DS.attr(),
  band: DS.attr()
  studio: DS.belongsTo('studio', {async: true})
});
