// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Premio de Ensayo Humanístico',
  author: ' Universidad de Montevideo',
  headerTitle: '',
  description: `
    El Premio UM de Ensayo Humanístico se inspira en la conciencia del valor de las humanidades para la formación de los jóvenes. La formación humanística ofrece una visión panorámica de la historia de las ideas y de los hechos, permitiendo comprender el pasado, explicar el presente y mejorar el futuro.

    Las disciplinas convocadas para 2023 son Historia y Filosofía. En la 9ª edición, el tema marco será “Trabajo y ocio” y podrán participar alumnos de 1º, 2º y 3º de bachillerato. En las bases se describe con detalle el concurso.

    Se trata de realizar un breve ensayo sobre las raíces históricas o filosóficas de los problemas actuales, con las eventuales alternativas de pensamiento o acciones futuras. Guiados por un docente, los alumnos deberán aplicar el tema marco a una temática concreta y hacer visible una reflexión o respuesta, incorporando nociones y teorías de las diversas disciplinas estudiadas.

    En el Blog se ofrecerán algunas reflexiones y preguntas que pueden ayudar a generar temas de ensayos y bajo la etiqueta Recursos se facilita material orientativo.
  `,
  language: 'es-uy',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app', // TODO: Update with deployment URL
  siteRepo: 'https://github.com/Fralez/blog-premio-ensayo-humanidades', // TODO: Update with repo URL
  github: 'https://github.com/Fralez/blog-premio-ensayo-humanidades',
  image: '/static/images/avatar.png',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/banner.png',
  email: 'humanidades@um.edu.uy',
  twitter: 'https://twitter.com/HumanidadesUM',
  linkedin: 'https://www.linkedin.com/school/universidad-de-montevideo_/',
  locale: 'es-UY',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  // comments: {
  //   // If you want to use an analytics provider you have to add it to the
  //   // content security policy in the `next.config.js` file.
  //   // Select a provider and use the environment variables associated to it
  //   // https://vercel.com/docs/environment-variables
  //   provider: 'giscus', // supported providers: giscus, utterances, disqus
  //   giscusConfig: {
  //     // Visit the link below, and follow the steps in the 'configuration' section
  //     // https://giscus.app/
  //     repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  //     repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
  //     category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  //     categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  //     mapping: 'pathname', // supported options: pathname, url, title
  //     reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
  //     // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
  //     metadata: '0',
  //     // theme example: light, dark, dark_dimmed, dark_high_contrast
  //     // transparent_dark, preferred_color_scheme, custom
  //     theme: 'light',
  //     // theme when dark mode
  //     darkTheme: 'transparent_dark',
  //     // If the theme option above is set to 'custom`
  //     // please provide a link below to your custom theme css file.
  //     // example: https://giscus.app/themes/custom_example.css
  //     themeURL: '',
  //     // This corresponds to the `data-lang="en"` in giscus's configurations
  //     lang: 'en',
  //   },
  // },
  // search: {
  //   provider: 'kbar', // kbar or algolia
  //   kbarConfig: {
  //     searchDocumentsPath: 'search.json', // path to load documents to search
  //   },
  //   provider: 'algolia',
  //   algoliaConfig: {
  //     // The application ID provided by Algolia
  //     appId: 'R2IYF7ETH7',
  //     // Public API key: it is safe to commit it
  //     apiKey: '599cec31baffa4868cae4e79f180729b',
  //     indexName: 'docsearch',
  //   },
  // },
}

module.exports = siteMetadata
