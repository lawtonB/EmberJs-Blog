import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(params){
      this.sendAction('saveComment', params);
    }
  }
});
