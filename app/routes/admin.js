import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },

  actions: {
    delete(blog) {
      if (confirm('delete blogpost?')){
        blog.destroyRecord();
      }
    },
    saveBlogPost(params){
      var newBlogPost = this.store.createRecord('blog', params);
      newBlogPost.save();
    },
    update(blog, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          blog.set(key,params[key]);
        }
      });
      blog.save();
    }
  }
});
