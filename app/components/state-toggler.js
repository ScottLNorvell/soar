import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  stateGuy: inject.service(),
  showPreview: computed('prop', 'stateGuy.{showHedPreview,showBodyPreview}', function() {
    let prop = this.get('prop');
    return this.get(`stateGuy.show${prop}Preview`);
  })
});
