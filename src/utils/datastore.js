/**
 * Created by christophportmann on 2/9/18.
 */

export async function getQuote (quoteId) {
  let quotes = await getQuotes()
  let filtered = quotes.filter(function (quote) {
    return quote.id === quoteId
  })

  return filtered.length > 0 ? filtered[0] : null
}

export async function getQuotes () {
  const authors = {
    hesse: {
      link: 'https://de.wikipedia.org/wiki/Hermann_Hesse',
      name: 'Hermann Hesse'
    },
    camus: {
      link: 'https://de.wikipedia.org/wiki/Albert_Camus',
      name: 'Albert Camus'
    },
  }
  const books = {
    demian: {
      title: 'Demian',
      author: authors.hesse,
      link: 'https://de.wikipedia.org/wiki/Demian',
      year: 1919
    },
    derFall: {
      title: 'Der Fall',
      author: authors.camus,
      link: 'https://de.wikipedia.org/wiki/Der_Fall_(Roman)',
      year: 1956
    }
  }
  const quotes = [
    {
      id: '0',
      book: books.demian,
      content: 'Wenn wir einen Menschen hassen, so hassen wir in seinem Bilde etwas, was in uns selber sitzt. Was nicht in uns selber ist, das regt uns nicht auf.',
      added: '4.2.17'
    },
    {
      id: '1',
      book: books.derFall,
      content: 'Gewiss sah ich mein Versagen immer ein und bedauerte es. Und doch fuhr ich fort, es mit recht verdienstlicher Beharrlichkeit zu vergessen. Über die Mitmenschen hingegen saß ich in meinem Herzen unablässig zu Gericht. Das finden Sie sicher empörend? Sie denken vielleicht, es sei nicht logisch? Es geht aber nicht darum, logisch zu sein.  Es geht darum, zwischen den Maschen hindurchzuschlüpfen, und vor allem, o ja, vor allem darum, sich dem Urteil zu entziehen. Ich sage nicht, sich der Strafe zu entziehen, denn die Strafe ohne Urteil ist erträglich. Sie hat übrigens einen Namen, der für unsere Unschuld bürgt: das Unglück.',
      added: '4.2.17'
    },
    {
      id: '2',
      book: books.derFall,
      content: 'Lächeln Sie nicht, diese Wahrheit ist nicht so selbstverständlich, wie sie scheint. Selbstverständliche Wahrheiten nent man die, die man zuletzt entdeckt hat, das ist alles.',
      added: '4.2.17'
    },
    {
      id: '3',
      book: books.derFall,
      content: 'Wissen Sie zum Beispiel, warum man ihn gekreuzigt hat, ihn, an den Sie jetzt vielleicht denken? Nun, dafür gab es eine Menge Gründe. Es fehlt nie an Gründen, einen Menschen umzubringen. Im Gegenteil, es ist unmöglich sein Weiterleben zu rechtfertigen.',
      added: '4.2.17'
    }]
  return quotes
}
