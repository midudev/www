import React from 'react'
import components, { Figcaption } from 'components/markdown'
import { Link } from 'components/elements'
import md from 'markdown-in-js'

import postLayout from 'layouts/post'

export const frontmatter = {
  title: 'Product Brief #5: New API Parameters & Gallery showcase',
  date: '30 May 2018',
  slug: 'new-api-parameters-gallery'
}

export default postLayout(frontmatter)(
  md(components)`

## Microlink API

[![](https://i.imgur.com/2RNeKiR.png)](https://docs.microlink.io/api)

${(
  <Figcaption>
    <Link href='https://docs.microlink.io/api' children='Microlink API' /> examples was improved,
    highlighting the referenced term in each section.
  </Figcaption>
)}

### User Agent API Parameter

We added a new configurable [User Agent](https://docs.microlink.io/api/#api-parameters/user-agent) as API parameter.

Normally you don't need to specify this value but some websites can have a different output based on the incoming request user agent.

For example, is very common websites serve images on [WebP](https://en.wikipedia.org/wiki/WebP) format they detect that you are using Google Chrome.

### Video API Parameter

In the [previous](/blog/sdk-2-0-more-video-providers) Product Brief we introduced the first iteration of video support as part of the API supported data [types](https://docs.microlink.io/api/#introduction).

Although it is widely used when you consume the API response using our [SDK](https://docs.microlink.io/sdk/), it can degrade the general user experience, making the response times a bit heavy, specially if you are only interested in the rest of data extracted by the API.

We decide leverage the decision in the new [video](https://docs.microlink.io/api/#api-parameters/video) API Parameter, when the default value is \`false\`.

If you are consuming link previews over the [SDK](https://docs.microlink.io/sdk/), no breaking changes here. Otherwise, keep in mind you need to pass it to have the same effect as until now.

## Metascraper v3.11

[![](https://metascraper.js.org/static/logo-banner.png)](https://metascraper.js.org/#/)

[metascraper](https://metascraper.js.org) continues to improve, which makes our extraction engine more efficient.

Some significant changes since the last time have been:

- **Improved URL detection** using a [WHATWG URL](https://url.spec.whatwg.org) parser. Thanks [Stefan Andres Charsley](https://github.com/microlinkhq/metascraper/pull/82) for contribute 🎉.
- **Optimized bootstrap process** loadind configuration file just [once](https://github.com/microlinkhq/metascraper/commit/cb18d36).
- **Speed up core rules** removing [non](https://github.com/microlinkhq/metascraper/commit/a36e240) [really](https://github.com/microlinkhq/metascraper/commit/296fda7) [necessaries](https://github.com/microlinkhq/metascraper/commit/47ec0e5) steps, also core is smaller and faster right now.
- **Add rules parameter support** doing possible load specific [rules](https://metascraper.js.org/#/?id=rules-1) out of the box.
- **Exported core validators** making possible [reuse](https://github.com/microlinkhq/metascraper/pull/89) them and creating consistent third party rules set.

This changes has been deployed at [Microlink API](https://docs.microlink.io/api), adding support for a new shiny functionality called **Custom Rules**: The ability to tell the API new rules to extract new data.

We are preparing a new post explaining how to do that, staty stunned 🤘.

## Microlink Gallery

[![](https://i.imgur.com/gCq6WeX.png)](https://gallery.microlink.io/)

We started building a [gallery](https://gallery.microlink.io) of webs, apps or 🦄  who use microlink with some purpose.

Please [contact with us](https://twitter.com/microlinkhq) for add your shiny project there ✨.
`
)
