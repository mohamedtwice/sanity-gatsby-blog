export default {
  widgets: [
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
                  buildHookId: '5f9984fdcdc046a99e01e603',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pfatz3z4',
                  apiId: '6a118d4a-ace6-4d75-8419-7c012d126212'
                },
                {
                  buildHookId: '5f9984fdfb6682a9b47286f5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-kppda7ce',
                  apiId: 'c64f67d4-1776-4d1c-bcfe-1646d17c079f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mohamedtwice/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-kppda7ce.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
