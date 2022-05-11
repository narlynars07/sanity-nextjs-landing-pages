export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '627b3e3cb2a7d323964a16f2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xt9qxk42',
                  apiId: '4a1aff81-72d6-4ca9-a2e2-79a0c7d0ae13'
                },
                {
                  buildHookId: '627b3e3d0aaa44230a00dcd8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3c5icm2k',
                  apiId: '4a2221cb-92a8-4d93-8bff-1cc5a411c0e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/narlynars07/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3c5icm2k.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
