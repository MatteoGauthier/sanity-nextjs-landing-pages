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
                  buildHookId: '606dd0af193ea12478f8cb1c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fgyenat6',
                  apiId: 'f610994c-72c3-43fa-bb6d-2cbbd3812236'
                },
                {
                  buildHookId: '606dd0af9b7eb130c6f452ef',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-34gnpr9m',
                  apiId: 'ce5170c5-17d8-497f-88ae-2c0f9b02ea90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MatteoGauthier/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-34gnpr9m.netlify.app', category: 'apps'}
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
