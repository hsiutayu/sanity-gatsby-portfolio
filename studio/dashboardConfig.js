export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d937eab22a7f48fa9cdedbc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-at3jxbwq',
                  apiId: 'fc46dd3b-86d5-478f-be33-8301770c0721'
                },
                {
                  buildHookId: '5d937eabfa77e8b901be17e6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nxbjbv1u',
                  apiId: '34e7520f-b8a5-4125-96b8-9dd56a87d71e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hsiutayu/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nxbjbv1u.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
