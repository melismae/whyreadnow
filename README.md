# Why Read Now 

Culture and literary criticism with Gatsby and Netlify under the hood.

To get started:
- fork the repo, npx or npm install the dependencies
- make sure you have [Gatsby](https://www.gatsbyjs.org/docs/quick-start/) installed globally. Run `npm install -g gatsby-cli` if not)
- to start the development server, run `gatsby develop`
- Local site is accessible at `localhost:8000`
- Since this is powered by [Netlify CMS](https://www.netlifycms.org), creating pages is accessible via `localhost:8000/admin` with the appropriate credentials

Known Issues:
- If you get an error indicating `Something went wrong installing the "sharp" module`, try running `npm rebuild` (or just `npm rebuild sharp`, though if you've changed Node versions you may have to rebuild anyways). I'm pretty sure this is a goofy Node version issue when running from VSCode, and appears to be a somewhat [common issue](https://github.com/gatsbyjs/gatsby/issues/13177) with Node + nvm + VSCode and Sharp after you change node versions. Some other paths you may have to go down include [this](https://github.com/nodejs/node-gyp/issues/569).