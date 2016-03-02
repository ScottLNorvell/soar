import Ember from 'ember';
import seoFixture from 'seor/utils/seo-fixture';

const {
  computed,
  inject
} = Ember;

export default Ember.Component.extend({
  classNames: ['container'],
  googleNews: seoFixture.googleNews,
  stateGuy: inject.service(),
  show: computed.reads('stateGuy.showSoarPanel'),
  seoA: computed(function() {
    return seoFixture.seo.slice(0, 6);
  }),
  seoB: computed(function() {
    return seoFixture.seo.slice(6);
  })
});
