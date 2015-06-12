QABoard.QuestionController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
