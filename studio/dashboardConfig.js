export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f77fdbc3a09c27a0737acc4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w11kv2pt',
                  apiId: '4490a450-a52b-487b-bcf0-eb86bc23aaaa'
                },
                {
                  buildHookId: '5f77fdbcfb09ac8ba89b132b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5qymocnx',
                  apiId: '3f45ed8a-a42f-4de6-b558-1c03d0803080'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nastari/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5qymocnx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
