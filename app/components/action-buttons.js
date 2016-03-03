import Ember from 'ember';

const {
  Component,
  inject,
  computed
} = Ember;

export default Component.extend({
  tagName: 'ul',
  classNames: ['action-list'],
  modal: inject.service(),
  stateGuy: inject.service(),
  actions: {
    openModal() {
      this.get('modal').show();
    },
    publish() {
      this.get('stateGuy').setProperties({
        firstTime: true,
        showSoarPanel: false,
        showHedPreview: false,
        showBodyPreview: false,
        badResults: true,
        showLtsPanel: true,
        published: true
      });
    }
  }
});
