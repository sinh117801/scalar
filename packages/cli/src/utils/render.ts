export const render = (spec: string): Promise<string> =>
  new Promise((resolve) => {
    resolve(`
<!DOCTYPE html>
<html>
  <head>
    <title>API Reference</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <!-- Add your own OpenAPI/Swagger spec file URL here: -->
    <div data-spec='${JSON.stringify(spec)}' />
    <script src="https://cdn.scalar.com/api-reference.standalone.js"></script>
  </body>
</html>
`)
  })
