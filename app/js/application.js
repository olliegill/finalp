window.App = Ember.Application.create();

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://premature-optimization.firebaseio.com/"),
});
