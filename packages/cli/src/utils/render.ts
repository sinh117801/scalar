import { ApiReference } from '@scalar/api-reference'
import { createSSRApp } from 'vue'
// Vue's server-rendering API is exposed under `vue/server-renderer`.
import { renderToString } from 'vue/server-renderer'

export const render = (spec: string): Promise<string> =>
  new Promise((resolve) => {
    const app = createSSRApp({
      data: () => ({ spec }),
      components: { ApiReference },
      template: `<ApiReference :spec="spec" />`,
    })

    renderToString(app).then((html: string) => {
      resolve(`<!DOCTYPE html>
<html>
  <head>
    <title>API Reference</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    ${html}
  </body>
</html>`)
    })
  })
