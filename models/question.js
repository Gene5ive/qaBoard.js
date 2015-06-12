QABoard.Question = DS.Model.extend({
  author: DS.attr(),
  description: DS.attr(),
  question: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
