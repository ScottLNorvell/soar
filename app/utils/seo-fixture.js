export default {
  googleNews: [
    {title: "200 words min", key: "gnMinWords"},
    {title: "200 words before 1st embed", key: "gnMinWordsB4Embed"},
    {title: "Headline 4-12 words", key: "gnHeadlineWordCnt"},
    {title: "3000 word max", key: "gnMaxWords"},
    {title: "Headline identical to title", key: "gnTitlesMatch"},
  ],
  seo: [
    {title: 'Focus keyword/s', score: 'required', key: "KWPresent"},
    {title: 'Keyword in the headline', score: "35pts", key: "KWinHL"},
    {title: 'Keyword in 1st paragraph', score: "20pts", key: "KWFirstPara"},
    {title: 'Story wordcount (300 min)', score: "10pts", key: "numWordsInStory"},
    {title: 'Presence of image', score: "10pts", key: "presenceOfImage"},
    {title: 'Keyword early in headline', score: "5pts", key: "KWinHLearly"},
    {title: 'Keyword in URL', score: "5pts", key: "KWinURL"},
    {title: 'Keywords in the caption', score: "5pts", key: "KWinCaption"},
    {title: '3 internal links', score: "5pts", key: "internalLinksNum"},
    {title: 'Meta description', score: "2pts", key: "MDPresent"},
    {title: 'Focus keyword in meta description', score: "2pts", key: "KWinMD"},
    {title: 'Word count of meta description', score: "1pts", key: "numCharsInMD"},
  ]
}
