QABoard.NewQuestionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newQuestion = this.store.createRecord('question', {
        author: this.get('author'),
        description: this.get('description'),
        question: this.get('question')
      });
      newQuestion.save();
      this.transitionToRoute('questions');
    }
  }
});
