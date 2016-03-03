import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  classNames: ['container'],
  stateGuy: inject.service(),
  show: computed.reads('stateGuy.showLtsPanel')
});
