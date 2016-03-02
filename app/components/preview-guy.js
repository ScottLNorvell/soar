import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'md-preview show' ],
  text: Ember.computed('model', function()
  		{
  			var keyword1 = 'Brett Phillips';
  			var keyword2 = 'Milwaukee Brewers';
  			var previewBodyParagraph = this.get('model');
  			var highlightBodyParagraph = previewBodyParagraph
  			.replace(new RegExp(keyword1, 'g'), '<span class="keyword-highlight">' + keyword1 + '</span>')
  			.replace(new RegExp(keyword2, 'g'), '<span class="keyword-highlight">' + keyword2 + '</span>')
			.replace(new RegExp('\n\n', 'g'), '</p>');
  			highlightBodyParagraph = '<p>' + highlightBodyParagraph + '</p>';
  			return highlightBodyParagraph;
  		}
	)
 });
