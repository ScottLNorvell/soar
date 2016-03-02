import Ember from 'ember';

const {
  Component,
  inject,
  run
} = Ember;

export default Component.extend({
  classNames: ['sr-progress__container'],
  modal: inject.service(),
  stateGuy: inject.service(),
  didInsertElement() {
    run.schedule('afterRender', ()=> {
      this.$('span').velocity({width: "100%"}, 2000, ()=> {
        this.get('modal').hide();
        this.get('stateGuy').setProperties({
          showSoarPanel: true,
          showHedPreview: true,
          showBodyPreview: true
        })
      });
    });
  }
});
