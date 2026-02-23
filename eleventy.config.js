import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPlugin(govukEleventyPlugin,
    {
      footer: {
        contentLicence: {
          html: 'Email: <a class="govuk-footer_link" href="mailto:hello@antonypoveda.design">hello@antonypoveda.design</a> <br><br> Content available under the <a class="govuk-footer_link" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International (CC BY 4.0) license</a>, unless otherwise stated.'
          },
          copyright: false,
        logo: false
        },
      titleSuffix: 'Antony Poveda',
      header: {
        logotype: {
          text: 'Antony Poveda'
                },
         },
      icons:{
        mask: false,
        shortcut: ['/assets/images/afavicon.ico'],
        touch: false
      },
      templates:{
        feed: true,
        tags: true
      },   
      stylesheets: ['/assets/styles.css'],
      opengraphImageUrl: ['assets/images/aopengraph.png'],
    })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'pages',
    }
  }
};