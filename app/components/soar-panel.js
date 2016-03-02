import Ember from 'ember';
import seoFixture from 'seor/utils/seo-fixture';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['container'],
  googleNews: seoFixture.googleNews,
  seoA: computed(function() {
    return seoFixture.seo.slice(0,6);
  }),
  seoB: computed(function() {
    return seoFixture.seo.slice(6);
  })
});
