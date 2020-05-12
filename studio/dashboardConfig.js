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
                  buildHookId: '5eba658af30aa7266d1552e3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4khwfcej',
                  apiId: '49e4c9df-4d30-4b0e-944f-b01ee3d50142'
                },
                {
                  buildHookId: '5eba658a975cef611713d965',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cw8qsmzr',
                  apiId: 'cdad4602-20a4-43d5-a746-446ed0e83941'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gispatial/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cw8qsmzr.netlify.app', category: 'apps'}
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
