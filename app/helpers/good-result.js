import Ember from 'ember';

export function goodResult([response, rule]) {
  return response[rule.key];
}

export default Ember.Helper.helper(goodResult);
