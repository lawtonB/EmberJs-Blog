import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment(params){
      this.sendAction('saveComment', params);
    },
    deleteComment(comment) {
      if(confirm('DESTROY???')) {
        this.sendAction('deleteComment', comment);
      }
    },
      update(comment, params) {
        this.sendAction('update', comment, params);
    }
  }
});
