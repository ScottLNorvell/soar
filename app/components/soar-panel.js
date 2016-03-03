import Ember from 'ember';
import seoFixture from 'seor/utils/seo-fixture';
import responseFixture from 'seor/utils/response-fixture';

const {
  computed,
  inject
} = Ember;

export default Ember.Component.extend({
  classNames: ['container'],
  googleNews: seoFixture.googleNews,
  stateGuy: inject.service(),
  good: computed.not('stateGuy.badResults'),
  show: computed.reads('stateGuy.showSoarPanel'),
  response: computed('good', function() {
    let good = this.get('good');
    if (good) {
      return responseFixture.good;
    }
    return responseFixture.bad;
  }),
  seoA: computed(function() {
    return seoFixture.seo.slice(0, 6);
  }),
  seoB: computed(function() {
    return seoFixture.seo.slice(6);
  }),
  resultClass: computed('response.totalScore', function() {
    let score = this.get('response.totalScore');
    if (score < 60) {
      return 'fail';
    } else if (score < 90) {
      return 'okay';
    }
    return 'pass';
  }),

  click() {
    this.get('stateGuy').setProperties({
      showSoarPanel: false,
      showLtsPanel: true
    })
  }
});
