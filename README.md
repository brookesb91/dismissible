![Dismissible](/images/header.PNG)

# dismissible

Dismissible animated alert banners written in plain ol' JavaScript.

## Quick Start

Include the dismissible styles in your `HEAD` tag

```html
<head>
  <!-- Other head stuff... -->
  <link rel="stylesheet" href="path/to/dismissible.css" />
</head>
```

Include the dismissible script at the bottom of your `BODY` tag

```html
<body>
  <!-- Other body stuff... -->
  <script src="path/to/dismissible.js"></script>
</body>
```

Add an element that will be used as the root container for dismissibles

```html
<body>
  <div id="dismissible-container"></div>
  <!-- Rest of body -->
</body>
```

Create a `Dismissible` instance

```js
const container = document.querySelector('#dismissible-container');
const dismissible = new Dismissible(container);
```

## Show dismissibles

```js
// Show informational prompt
dismissible.info('This is an informational alert.');

// Show successful action prompt
dismissible.success('This is a success alert.');

// Show error prompt
dismissible.error('This is an error alert.');
```

![Info](/images/info.PNG)

![Success](/images/success.PNG)

![Error](/images/error.PNG)

## Hide dismissibles

> Dismissibles are dismissed when their dismiss button is clicked. However it is possible to dismiss them on demand.

```js
dismissible.dismiss();
```
