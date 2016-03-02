import Ember from 'ember';

export default Ember.Service.extend({
  showMe: false,
  show() {
    this.set('showMe', true);
  },
  hide() {
    this.set('showMe', false);
  }
});
