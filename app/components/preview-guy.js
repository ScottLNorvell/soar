import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'md-preview show' ],
  text: Ember.computed('model', function()
  		{
  			var previewBodyParagraphs = this.get('model');
  			// TODO: replace with real keywords
  			var keyword1 = 'Brett Phillips';
  			var keyword2 = 'Milwaukee Brewers';
  			var firstParagraph = 'This noise might haunt you forever.';
  			var hed = 'Baseball Player\'s Laugh Sounds Like a Cackling Demon';

  	 		var highlightedParagraphs = previewBodyParagraphs
  	 		.replace(new RegExp(keyword1, 'g'), '<span class="keyword-highlight">' + keyword1 + '</span>')
  	 		.replace(new RegExp(keyword2, 'g'), '<span class="keyword-highlight">' + keyword2 + '</span>')
  	 		.replace(new RegExp(firstParagraph, 'g'), '<span class="keyword-highlight">' + firstParagraph + '</span>')
			.replace(new RegExp(hed, 'g'), '<span class="keyword-highlight">' + hed + '</span>')
  	 		;
  	 		return highlightedParagraphs.split('\n\n');
  		}
	)
 });
