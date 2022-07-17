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
                  buildHookId: '62d369a581fa5c7c3cb8a809',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ojsk58tv',
                  apiId: '9b0d1853-537a-4bee-ba6c-7e53e90c6e13'
                },
                {
                  buildHookId: '62d369a60422277506aa83ba',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ptbbk21u',
                  apiId: 'a0a322e0-0c52-47de-90ff-8ff4a6907882'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anthony-risingsun/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ptbbk21u.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
