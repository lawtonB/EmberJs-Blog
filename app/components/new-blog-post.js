import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlogPost: false,
  actions: {
    blogPostForm() {
      this.set('addNewBlogPost', true);
    },

    saveBlogPost() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        link: this.get('link'),
        date: this.get('date'),
      };
      this.set('addNewBlogPost', false);
      this.sendAction('saveBlogPost', params);
    }
  }
});
