import Ember from 'ember';

const {
  Component,
  computed,
  inject,
  run
} = Ember;

export default Component.extend({
  classNames: ['sr-progress__container'],
  modal: inject.service(),
  stateGuy: inject.service(),
  firstTime: computed.alias('stateGuy.firstTime'),
  didInsertElement() {
    run.schedule('afterRender', ()=> {
      this.$('span').velocity({width: "100%"}, 2000, ()=> {
        this.get('modal').hide();
        if (this.get('firstTime')) {
          this.makeBad();
        } else {
          this.makeGood();
        }
      });
    });
  },

  makeBad() {
    this.toggleProperty('firstTime');
    this.get('stateGuy').setProperties({
      showSoarPanel: true,
      showHedPreview: true,
      showBodyPreview: true,
      badResults: true
    });
  },

  makeGood() {
    this.toggleProperty('firstTime');
    this.get('stateGuy').setProperties({
      showSoarPanel: true,
      showHedPreview: false,
      showBodyPreview: false,
      badResults: false,
      showLtsPanel: true
    });
  }
});
