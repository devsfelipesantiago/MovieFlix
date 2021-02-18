const api = 'https://api.themoviedb.org/3/movie/550?api_key=a6de5784273195d88542e30bb91ab6e4 ';

const getHomeList = async () =>
  [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: []
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: []
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: []
    },
    {
      slug: 'action',
      title: 'Ação',
      items: []
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: []
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: []
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: []
    },
    {
      slug: 'documentary',
      title: 'Documentary',
      items: []
    },
  ];
