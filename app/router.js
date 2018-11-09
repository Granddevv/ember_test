import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authors', {
    resetNamespace: true
  }, function () {
    this.route('index', { path: '/' });
    this.route('show', { path: '/:author_id' });
    this.route('add', { path:'/add' });
  });
});

export default Router;
