QABoard.Question = DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
