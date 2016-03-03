import Ember from 'ember';

const {
  Component,
  computed,
  inject,
  run,
  $
} = Ember;

export default Component.extend({
  classNames: ['md-preview show'],
  stateGuy: inject.service(),
  attributeBindings: ['style'],
  text: computed('model', function() {
		let previewBodyParagraphs = this.get('model');
		// TODO: replace with real keywords and data
		let keyword1 = 'Brett Phillips';
		let keyword2 = 'Milwaukee Brewers';
		let firstParagraph = 'This noise might haunt you forever.';
		let hed = 'Baseball Player\'s Laugh Sounds Like a Cackling Demon';
		let caption = 'OMG, make it stop!';

 		let highlightedParagraphs = previewBodyParagraphs
	 		.replace(new RegExp(keyword1, 'g'), '<span class="keyword-highlight-good">' + keyword1 + '</span>')
	 		.replace(new RegExp(keyword2, 'g'), '<span class="keyword-highlight-good">' + keyword2 + '</span>')
	 		.replace(new RegExp(firstParagraph, 'g'), '<span class="keyword-highlight">' + firstParagraph + '</span>')
			.replace(new RegExp(hed, 'g'), '<span class="keyword-highlight">' + hed + '</span>')
			.replace(new RegExp(caption, 'g'), '<span class="keyword-highlight">' + caption + '</span>');
 		return highlightedParagraphs.split('\n\n');
	}),

  click() {
    let prop = this.get('prop');
    this.toggleProperty(`stateGuy.show${prop}Preview`);
    run.schedule('afterRender', ()=> {
      let focusAfter = this.get('focusAfter');
      $(`.${focusAfter}`).focus();
    });
    return false;
  }
 });
