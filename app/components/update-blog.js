import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm(){
      this.set('updateBlogForm', true);
    },
    update(blog) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        link: this.get('link'),
        date: this.get('date'),
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', blog, params);
      }
    }
});
