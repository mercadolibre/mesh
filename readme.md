# Mesh

A tiny yet powerful grid system.

## Overview

Mesh is a 12-column grid system built to help you develop with ease.
Key features:

- Mobile-fist and responsive.
- Fluid columns.
- Fixed gutters.
- Infinite nesting.
- ~545 bytes (minified and gzipped)

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

- A grid contains a given number of cells —up to 12.
- The size of each cell can be defined for every breakpoint.
- Grids can only have cells as (first) child.
- Grids or cells should never be styled.
- Grids can be nested.
- The content goes inside the cells.

### Examples

Let's see some examples.

- A grid with width-agnostic cells:

    ```html
    <div class="mh-grid">
        <div class="mh-grid__cell mh-grid__cell--a-4"> ... </div>
        <div class="mh-grid__cell mh-grid__cell--a-4"> ... </div>
        <div class="mh-grid__cell mh-grid__cell--a-4"> ... </div>
    </div>
    ```

- Columns with different sizes for small and large breakpoints:

    ```html
    <div class="mh-grid">
        <div class="mh-grid__cell mh-grid__cell--s-12 mh-grid__cell--l-3"> ... </div>
        <div class="mh-grid__cell mh-grid__cell--s-12 mh-grid__cell--l-9"> ... </div>
    </div>
    ```

- A nested grid:

    ```html
    <div class="mh-grid">
        <div class="mh-grid__cell mh-grid__cell--a-4">
            <div class="mh-grid">
                <div class="mh-grid__cell mh-grid__cell--a-6"> ... </div>
                <div class="mh-grid__cell mh-grid__cell--a-6"> ... </div>
            </div>
        </div>
        <div class="mh-grid__cell mh-grid__cell--a-4"> ... </div>
        <div class="mh-grid__cell mh-grid__cell--a-4"> ... </div>
    </div>
    ```

- Grid without gutter correction:

    ```html
    <div class="mh-grid mh-grid--no-gutter-correction">
        <div class="mh-grid__cell mh-grid__cell--a-6"> ... </div>
        <div class="mh-grid__cell mh-grid__cell--a-6"> ... </div>
    </div>
    ```

## Options

Size, keys and class names:

| Size     | Key    | Applies  | Class name           |
|----------|--------|----------|----------------------|
| Agnostic | a      | *Always* | mh-grid__cell--a-*   |
| Smallest | xxs    | ≥ 0px    | mh-grid__cell--xxs-* |
| Smaller  | xs     | ≥ 320px  | mh-grid__cell--xs-*  |
| Small    | s      | ≥ 480px  | mh-grid__cell--s-*   |
| Medium   | m      | ≥ 768px  | mh-grid__cell--m-*   |
| Large    | l      | ≥ 1024px | mh-grid__cell--l-*   |
| Larger   | xl     | ≥ 1200px | mh-grid__cell--xl-*  |

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

If you find a bug, please report it on the [issue tracker](issues/new).
In case you want to fix an issue or implement a new feature, make sure that
you have read the [contribution guidelines](contributing.md) first.

## License

© 2013-2015 MercadoLibre. Licensed under the [MIT license](license.txt).
