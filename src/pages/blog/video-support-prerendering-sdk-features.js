import React from 'react'
import components, { Figcaption, PreCode } from 'components/markdown'
import { Link } from 'components/elements'
import md from 'markdown-in-js'

import postLayout from 'layouts/post'

export const frontmatter = {
  title: 'Product Brief #3: Video support, better prerendering & SDK features',
  slug: 'video-support-prerendering-sdk-features',
  date: '02 March 2018'
}

export default postLayout(frontmatter)(
  md(components)`
## Microlink API

![](https://i.imgur.com/o8cC1k4.png)

${(
  <Figcaption>
    The new video data property in action.{' '}
    <Link
      href='https://api.microlink.io/?url=https://www.amazon.com/dp/B06XCM9LJ4'
      children='Explore'
    />{' '}
    the rest!
  </Figcaption>
)}

### A new video field

We [finally](https://github.com/microlinkhq/metascraper/pull/56) added support for video 🎉.

Now, the [Microlink API](https://docs.microlink.io/api/#introduction) provides a new field called **video** for identifying streaming sources detected from the target url.

### Added auto prerendering mode

Pre-rendering is a technique for retrieving the HTML content simulating the user browser navigation.

Although it will provide better data, it will take more time to respond. Most popular services do not need it.

In order to improve the response timing, we’ve provided an **auto** value by default.

This means that the service will determine if the target URL needs to use the pre-rendering technique or not.

We tested that this decision **speeds up the process up to 50%.**

A great merit of the improvements is related with our work improving our abstract library for interacting with Headless Chrome, [browserless](https://browserless.js.org).

Also thanks to the [Puppeteer community](https://github.com/GoogleChrome/puppeteer) for helping us address performance issues.

## Microlink SDK

![](https://i.imgur.com/MkuOzT9.gif)

${(
  <Figcaption>
    <Link href='https://docs.microlink.io' children='Microlink SDK' /> now supports video
    previsualizations.{' '}
    <Link
      href='https://storybook.microlink.io/?selectedKind=Normal&selectedStory=with%20video%20media&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel'
      children='Explore'
    />{' '}
    the rest!
  </Figcaption>
)}

### Added video support

Because [Microlink API ](https://docs.microlink.io/api/#introduction)can detect video, we use the new field to place the streaming source into our preview cards, via our [SDK](https://docs.microlink.io/sdk/).

![](https://cdn-images-1.medium.com/max/1440/1*PWDop7s7KmmmvccVbULiyA.gif)

${(
  <Figcaption>
    video support is included for{' '}
    <Link
      href='https://docs.microlink.io/sdk/getting-started/api-parameters/#size'
      children='normal or large'
    />{' '}
    card sizes.
  </Figcaption>
)}

We added properties to control the video, like [autoplay](https://docs.microlink.io/sdk/getting-started/api-parameters/#autoplay), [muted](https://docs.microlink.io/sdk/getting-started/api-parameters/#muted) or [loop](https://docs.microlink.io/sdk/getting-started/api-parameters/#loop) options.

### Smooth image loading

![](https://cdn-images-1.medium.com/max/1440/1*FwTUJSw1Vn4g8eC5wzMCkQ.gif)

${(
  <Figcaption>
    Our fancy loading animation, claps to{' '}
    <Link href='https://twitter.com/breadadams' children='@breadadamas' /> 👏.
  </Figcaption>
)}

We improved the transition between how the card looks before the content of the card is loaded, to give it a more *natural* look.

### Add reverse property

![](https://i.imgur.com/qyPAMve.png)

${(
  <Figcaption>
    Using the new{' '}
    <Link
      href='https://docs.microlink.io/sdk/getting-started/api-parameters/#reverse'
      children='reverse'
    />{' '}
    API paramter for invert the media position in the card.
  </Figcaption>
)}

We added the possibility to invert the orientation of the content in the card using a new field called [reverse](https://docs.microlink.io/sdk/getting-started/api-parameters/#reverse).

## How to update

You’ll need to make sure you have version **1.7.0 or above** of the [Microlink SDK](https://docs.microlink.io).

### From CDN

The easiest way to consume the frontend library. Just paste the corresponding script before the closing \`<body>\` tag:

${(
  <PreCode>{`<!-- Microlink SDK Vanilla/UMD bundle -->
<script type="text/javascript" src="//unpkg.com/@microlink/vanilla@latest/umd/microlink.min.js"></script>

<!-- Microlink SDK AMD bundle -->
<script type="text/javascript" src="//unpkg.com/@microlink/vanilla@latest/amd/microlink.min.js"></script>

<!-- Microlink SDK CJS bundle -->
<script type="text/javascript" src="//unpkg.com/@microlink/vanilla@latest/cjs/microlink.min.js"></script>`}</PreCode>
)}

See more [information](https://docs.microlink.io/sdk/getting-started/vanilla/).

### From NPM

If you’re using Microlink from your \`package.json\` then you’ll need to consume the library from the NPM registry:

**Vanilla version**

${<PreCode>{`$ npm install @microlink/vanilla@latest`}</PreCode>}

**React version**

${<PreCode>{`$ npm update @microlink/react@latest`}</PreCode>}

See more [information](https://docs.microlink.io/sdk/getting-started/react/).
`
)
