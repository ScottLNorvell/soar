import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  stateGuy: inject.service(),
  published: computed.reads('stateGuy.published'),
  tagName: ''
});
