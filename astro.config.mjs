import { defineConfig } from 'astro/config';
import starlight, { autogenerate } from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'


// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'مستندات داخلی',
      customCss: [
        // Path to your custom CSS file
        './src/styles/custom.css',
        
      ],

      plugins: [
        
      ],

      logo: {
        light: './public/rpk.svg',
        dark: './public/rpk-w.svg',
        replacesTitle: true,
      },
      editLink: {
      baseUrl: 'https://github.com/withastro/starlight/edit/main/',
      },

      head: [
        {
          tag: 'meta',
          attrs: {
            charset: 'UTF-8'
          }
        }
      ],
      defaultLocale: 'root',
      locales: {
    
        root: {
          label: 'فارسی',
          lang: 'fa',
          dir: 'rtl',
        }
      },
      sidebar: [
        {
          label: 'صفحه اصلی',
          link: '/',
        },
        {
          label: 'شروع سریع',
          link: '/getting-started/',
        },
        {
          label: 'راهنما',
          items: [
            {
              label: 'راهنمای اول',
              link: '/guides/first-guide/',
            },
            {
              label: 'راهنمای دوم',
              link: '/guides/second-guide/',
            },
          ]
        },
        {
          label: 'مرجع',
          items: [
            {
              label: 'کامپوننت ها',
              link: '/reference/components/',
            },
            {
              label: 'API',
              link: '/reference/api/overview/',
            },
          ]
        },
      ]
    }),
  ],
});