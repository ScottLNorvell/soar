import Ember from 'ember';
import articleFixture from 'seor/utils/article-fixture';

export default Ember.Route.extend({
  model() {
    return articleFixture;
  }
});

