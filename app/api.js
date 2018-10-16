// use utils/request
const request = slug => new Promise(resolve => {
  const posts = [
    {
      id: 1, title: 'Small Time', slug: 'small_time', genre: 'Comedy|Drama', description: 'In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor.',
    },
    {
      id: 2, title: 'Collateral Damage', slug: 'collateral_damage', genre: 'Action|Thriller', description: 'Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh.',
    },
    {
      id: 3, title: 'Century', slug: 'century', genre: 'Drama', description: 'Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna.',
    },
    {
      id: 4, title: 'Melody Time', slug: 'melody_time', genre: 'Animation|Children|Musical', description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo consequat.',
    },
    {
      id: 5, title: 'Last Days on Mars, The', slug: 'last_days_on_mars', genre: 'Horror|Sci-Fi', description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel ante a orci tempus eleifend.',
    },
    {
      id: 6, title: 'Confessions of a Teenage Drama Queen', slug: 'confessions_of_a_teenage_drama_quen', genre: 'Comedy', description: 'Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue.',
    },
    {
      id: 7, title: 'Collector, The', slug: 'the_collector', genre: 'Drama|Horror|Thriller', description: 'Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum.',
    },
    {
      id: 8, title: 'The Wayward Girl', slug: 'the_wayward_girl', genre: 'Drama', description: 'Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum.',
    },
    {
      id: 9, title: 'Rocks in my Pockets', slug: 'rocks_in_my_pockets', genre: 'Animation|Comedy|Drama', description: 'Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor.',
    },
    {
      id: 10, title: 'Invasion of the Body Snatchers', slug: 'invasion_of_the_body_snatchers', genre: 'Horror|Sci-Fi|Thriller', description: 'Sed molestie augue sit amet leo consequat posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.',
    },
  ];

  if (slug === 'all') {
    setTimeout(() => {
      resolve({
        posts,
        count: 10,
      });
    }, 1000);
  } else {
    const post = posts.filter(post => post.slug === slug)[0];

    setTimeout(() => {
      resolve({
        post,
      });
    }, 1000);
  }
});

const Posts = {
  all: () => request('all'),
  get: slug => request(slug),
};

export default {
  Posts,
};
