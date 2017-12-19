import Component from '@ember/component';

export default Component.extend({
  firebaseApp: Ember.inject.service(),
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  onlyUsersArticles: false,
  classNames: ['article-list'],
  onlyTitle: false,
  admin: Ember.computed.alias('currentUser.user.admin'),
  actions: {
    delete(article) {
      article.destroyRecord().then(() => {
        console.log('Smazáno.');
      }, () => {
        console.log('Nesmazáno.');
      });
    }
  }
});
