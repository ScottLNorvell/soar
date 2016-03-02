import Ember from 'ember';

const {
  Component,
  inject,
  run
} = Ember;

export default Component.extend({
  classNames: ['sr-progress__container'],
  progress: 1,
  modal: inject.service(),
  didInsertElement() {
    run.schedule('afterRender', ()=> {
      this.$('span').velocity({width: "100%"}, 2000, ()=> {
        this.get('modal').hide();
      });
    });
  }
});
