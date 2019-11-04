function makeArticlesArray() {
    return [
      {
        id: 1,
        date_published: '2029-01-22T16:28:32.615Z',
        title: 'First test post!',
        style: 'How-to',
        content: 'Lorem ipsum dolor sit amet, Pijamose er Montana',
        author: 1
      },
      {
        id: 2,
        date_published: '2100-05-22T16:28:32.615Z',
        title: 'Second test post!',
        style: 'News',
        content: 'Velit temporibus debitis rerum.',
        author: 2
      },
      {
        id: 3,
        date_published: '1919-12-22T16:28:32.615Z',
        title: 'Third test post!',
        style: 'Listicle',
        content: 'Lorem ipsum dolor sit amet, Dove sono Abel e Arthur?',
        author: 2
      },
      {
        id: 4,
        date_published: '1919-12-22T16:28:32.615Z',
        title: 'Fourth test post!',
        style: 'Story',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae accusamus veniam consectetur tempora, corporis obcaecati ad nisi asperiores tenetur, autem magnam.',
        author: 1
      },
    ];
}

function makeMaliciousArticle() {
  const maliciousArticle = {
    id: 911,
    date_published: '1919-11-22T16:28:32.615Z',
    title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    style: 'Story',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    author: 1,
  }
  const expectedArticle = {
    ...maliciousArticle,
    title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousArticle,
    expectedArticle,
  }
}
  
module.exports = {
    makeArticlesArray,
    makeMaliciousArticle
}