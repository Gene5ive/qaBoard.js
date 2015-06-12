QABoard.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        author: this.get('author'),
        body: this.get('body')
      });
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
