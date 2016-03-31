import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog', params.blogpost_id);
    // return this.store.findRecord('comment', params.comment_id);
  },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var blog = params.blog;
      blog.get('comments').addObject(newComment);
      newComment.save().then(function(){
      return blog.save();
      });
    },

    deleteComment(comment){
      comment.destroyRecord();
    },
    update(comment, params) {
      console.log(comment);
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined) {
          comment.set(key,params[key]);
        }
      });
      comment.save();
    }
  }
});
