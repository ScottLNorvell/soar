export default {
  googleNews: [
    {title: "200 words min"},
    {title: "200 words before 1st embed"},
    {title: "Headline 4-12 words"},
    {title: "3000 word max"},
    {title: "Headline identical to title"},
  ],
  seo: [
    {title: 'Focus keyword/s', score: 'required'},
    {title: 'Keyword in the headline', score: "35pts"},
    {title: 'Keyword in 1st paragraph', score: "20pts"},
    {title: 'Story wordcount (300 min)', score: "10pts"},
    {title: 'Presence of image', score: "10pts"},
    {title: 'Keyword early in headline', score: "5pts"},
    {title: 'Keyword in URL', score: "5pts"},
    {title: 'Keywords in the caption', score: "5pts"},
    {title: '3 internal links', score: "5pts"},
    {title: 'Meta description', score: "2pts"},
    {title: 'Focus keyword in meta description', score: "2pts"},
    {title: 'Word count of meta description', score: "1pts"},
  ]
}
