import Ember from 'ember';

const {
  Component,
  inject,
  computed,
  observer
} = Ember;

export default Component.extend({
  tagName: '',
  modal: inject.service(),
  show: computed.reads('modal.showMe'),
  actions: {
    closeModal() {
      this.get('modal').hide();
    }
  }
});
