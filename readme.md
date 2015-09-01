# Mesh

A tiny yet powerful grid system.

## Overview

Mesh is a 12-column grid system built to help you develop with ease.
Key features:

- Mobile-fist and responsive.
- Fluid columns.
- Fixed gutters.
- Infinite nesting.
- ~528 bytes (minified and gzipped)

To all that, add progressive enhancement, since Mesh has width-agnostic columns
to support those old browsers that don't know what media-queries are.

## Usage

To get started just [download the minified file](dist/mesh.min.css) and include
it into your project.

```html
<link href="styles/mesh.min.css" rel="stylesheet" />
```

### How it works

It's important to keep in mind that:

- A row contains a given number of columns —up to 12.
- The size of each column can be defined for every breakpoint.
- Rows can only have columns as (first) child.
- Rows or columns should never be styled.
- Rows can be nested.
- The content goes inside the columns.

### Examples

Let's see some examples.

- A row with width-agnostic columns:

    ```html
    <div class="mesh-row">
        <div class="mesh-col-4"> ... </div>
        <div class="mesh-col-4"> ... </div>
        <div class="mesh-col-4"> ... </div>
    </div>
    ```

- Columns with different sizes for small and large breakpoints:

    ```html
    <div class="mesh-row">
        <div class="mesh-col-s-12 mesh-col-l-3"> ... </div>
        <div class="mesh-col-s-12 mesh-col-l-9"> ... </div>
    </div>
    ```

- A nested row:

    ```html
    <div class="mesh-row">
        <div class="mesh-col-4">
            <div class="mesh-row">
                <div class="mesh-col-6"> ... </div>
                <div class="mesh-col-6"> ... </div>
            </div>
        </div>
        <div class="mesh-col-4"> ... </div>
        <div class="mesh-col-4"> ... </div>
    </div>
    ```

- Row without gutter correction:

    ```html
    <div class="mesh-row no-reset">
        <div class="mesh-col-6"> ... </div>
        <div class="mesh-col-6"> ... </div>
    </div>
    ```

You can see it in action on the
[test page](https://mercadolibre.github.io/mesh/test/test.html).

## Options

Size, keys and class names:

| Size     | Key    | Applies  | Class name     |
|----------|--------|----------|----------------|
| Agnostic | *None* | *Always* | mesh-col-*     |
| Smallest | xxs    | ≥ 0px    | mesh-col-xxs-* |
| Smaller  | xs     | ≥ 320px  | mesh-col-xs-*  |
| Small    | s      | ≥ 480px  | mesh-col-s-*   |
| Medium   | m      | ≥ 768px  | mesh-col-m-*   |
| Large    | l      | ≥ 1024px | mesh-col-l-*   |
| Larger   | xl     | ≥ 1200px | mesh-col-xl-*  |

## Customization

If you want to customize Mesh, you only need [Node](https://nodejs.org/)
*^0.10.0* and [Gulp](http://gulpjs.com/) *^3.9.0* up and running.

Since the only thing that you'll probably be modifying is the `$mesh` map and
its values, we assume you know how to do it. Knock yourself up!

## Browser support

We aim to support the following browsers:

- Chrome *latest 5*
- Firefox *latest 5*
- Internet Explorer *8+*
- Opera *latest 5*
- Safari *latest 5*
- iOS Safari *latest 5*
- Android Browser *2.1+*

While Mesh might work fine in other browsers or older versions, we can only
ensure that it will do it seamless in the above.

## Contributing

If you find a bug, please report it on the [issue tracker]
(https://github.com/mercadolibre/mesh/issues).
In case you want to fix an issue or implement a new feature, make sure that
you have read the [contribution guidelines](contributing.md) first.

## License

© 2013-2015 MercadoLibre. Licensed under the [MIT license](license.txt).
