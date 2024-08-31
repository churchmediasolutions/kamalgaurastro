const API_URL = 'https://kamalgaur.com/wp-json/wp/v2/';

// Gets post by API URL and given path
export async function fetchAPI(path) {
    const res = await fetch(`${API_URL}${path}`);
    const json = await res.json();

    return json;
}

// export const processPosts = (posts : unknown) =>  {
//     const renewed = [];
//     posts.array.forEach(element => {
//         let categorise : any = [];
//         element.categories.array.forEach(category => {
//             for (let indexval=0; indexval < categories.length; indexval++) {
//                 if (category === categories[indexval].id) {
//                     categorise.push({
//                         name:   categories[indexval].name,
//                         slug:   categories[indexval].slug
//                     })
//                 }
//             }
//         });
//         element['categoriesNew'] = categorise;
//         renewed.push(element);
//     });
//     return renewed;
// }


export async function getPosts() {
    //const posts = await fetchAPI('posts?per_page=10&_fields=author,id,excerpt,title,slug,categories,tags&_embed');
    const posts = await fetchAPI('posts?per_page=100&_embed&_fields=author,id,excerpt,title,slug,categories,date');
    //const renewed = processPosts(posts)
    return posts;
}


export const categories = [
    {
      id: 937,
      count: 0,
      name: '1 Line Ideas',
      slug: 'realworld-existing-1li',
      description: 'Ideas that are meant for the <em>real</em> world, which operate in <em>spaces that have already been invented</em>, but which are <em>unique additions</em> that can be <em>described succinctly in a couple of lines</em>',
      parent: 933
    },
    {
      id: 920,
      count: 6,
      name: '1 Line Ideas',
      slug: 'digitalworld-dne-1li',
      description: 'Ideas that are meant for the <em>digital</em> world, which do not exist anywhere yet, and which <em>can be conveyed</em> in a couple of lines',
      parent: 930
    },
    {
      id: 926,
      count: 3,
      name: '1 Line Ideas',
      slug: 'realworld-dne-1li',
      description: 'Ideas that are meant for the <em>real</em> world, which do not exist anywhere yet, and which <em>can be conveyed</em> in a couple of lines',
      parent: 929
    },
    {
      id: 936,
      count: 13,
      name: '1 Line Ideas',
      slug: 'digitalworld-existing-1li',
      description: 'Ideas that are meant for the <em>digital</em> world, which operate in <em>spaces that have already been invented</em>, but which are <em>unique additions</em> that can be <em>described succinctly in a couple of lines</em>',
      parent: 931
    },
    {
      id: 944,
      count: 4,
      name: 'Blockchain &amp; Crypto',
      slug: 'blockchaincrypto',
      description: '',
      parent: 0
    },
    {
      id: 932,
      count: 0,
      name: 'Concept Notes',
      slug: 'realworld-dne-conceptnotes',
      description: 'Ideas that are meant for the <em>real</em> world, which do not exist anywhere yet, and which <em>need way more than a couple of lines</em> for an explanation',
      parent: 929
    },
    {
      id: 921,
      count: 9,
      name: 'Concept Notes',
      slug: 'digitalworld-dne-conceptnotes',
      description: 'Ideas that are meant for the <em>digital</em> world, which do not exist anywhere yet, and which <em>need way more than a couple of lines</em> for an explanation',
      parent: 930
    },
    {
      id: 927,
      count: 1,
      name: 'Context',
      slug: 'context',
      description: '',
      parent: 0
    },
    {
      id: 924,
      count: 35,
      name: 'Digital World',
      slug: 'digitalworld',
      description: 'Ideas that are meant for the <em>digital</em> world',
      parent: 0
    },
    {
      id: 929,
      count: 3,
      name: 'Does Not Exist',
      slug: 'realworld-dne',
      description: 'Ideas that are meant for the <em>real</em> world, but do not exist anywhere yet',
      parent: 922
    },
    {
      id: 930,
      count: 15,
      name: 'Does Not Exist',
      slug: 'digitalworld-dne',
      description: 'Ideas that are meant for the <em>digital</em> world, but do not exist anywhere yet',
      parent: 924
    },
    {
      id: 933,
      count: 3,
      name: 'Existing',
      slug: 'realworld-existing',
      description: 'Ideas that are meant for the <em>real</em> world, which operate in <em>spaces that have already been invented</em>',
      parent: 922
    },
    {
      id: 931,
      count: 20,
      name: 'Existing',
      slug: 'digitalworld-existing',
      description: 'Ideas that are meant for the <em>digital</em> world, which operate in <em>spaces that have already been invented</em>',
      parent: 924
    },
    {
      id: 925,
      count: 7,
      name: 'Improvements',
      slug: 'digitalworld-existing-improvements',
      description: 'Ideas that are meant for the <em>digital</em> world, which operate in <em>spaces that have already been invented</em>, and which offer <em>incremental improvements</em> on features that already exist',
      parent: 931
    },
    {
      id: 934,
      count: 3,
      name: 'Improvements',
      slug: 'realworld-existing-improvements',
      description: 'Ideas that are meant for the <em>real</em> world, which operate in <em>spaces that have already been invented</em>, and which offer <em>incremental improvements</em> on features that already exist',
      parent: 933
    },
    {
      id: 922,
      count: 5,
      name: 'Real World',
      slug: 'realworld',
      description: 'Ideas that are meant for the <em>real</em> world',
      parent: 0
    },
    {
      id: 1,
      count: 0,
      name: 'Uncategorized',
      slug: 'uncategorized',
      description: '',
      parent: 0
    },
    {
      id: 938,
      count: 0,
      name: 'Unknown',
      slug: 'unknown',
      description: '',
      parent: 0
    },
    {
      id: 945,
      count: 0,
      name: '_BestProductReviews',
      slug: '_bestproductreviews',
      description: '',
      parent: 0
    },
    {
      id: 2,
      count: 0,
      name: '_Business Case Math',
      slug: 'business-case-math',
      description: '',
      parent: 0
    },
    {
      id: 3,
      count: 1,
      name: '_Design Improvements',
      slug: 'design-improvements',
      description: '',
      parent: 0
    },
    {
      id: 5,
      count: 2,
      name: '_Inferences &amp; Guesstimations',
      slug: 'inferences-guesstimations',
      description: '',
      parent: 0
    },
    {
      id: 7,
      count: 2,
      name: '_Measurements',
      slug: 'measurements',
      description: '',
      parent: 0
    },
    {
      id: 10,
      count: 0,
      name: '_Ready to be published',
      slug: 'ready-to-be-published',
      description: '',
      parent: 0
    }
  ];  