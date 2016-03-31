import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  link: DS.attr(),
  date: DS.attr(),
  comments: DS.hasMany('comment', {async:true})
});
