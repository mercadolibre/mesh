# Mesh

A tiny yet powerful grid system.

## Overview

Mesh is a 12-column grid system built to help you develop with ease.
Key features:

- Mobile-fist and responsive.
- Fluid columns.
- Fixed gutters.
- Infinite nesting.

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
- Grids can only have cells as (first) childs.
- Grids or cells should never be styled.
- Grids can be nested.
- The content goes inside the cells.

### Examples

Let's see some examples.

- A grid with width-agnostic cells:

    ```html
    <div class="mh-grid">
        <div class="mh-grid__cell mh-grid__cell--4"> ... </div>
        <div class="mh-grid__cell mh-grid__cell--4"> ... </div>
        <div class="mh-grid__cell mh-grid__cell--4"> ... </div>
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
        <div class="mh-grid__cell mh-grid__cell--4">
            <div class="mh-grid">
                <div class="mh-grid__cell mh-grid__cell--6"> ... </div>
                <div class="mh-grid__cell mh-grid__cell--6"> ... </div>
            </div>
        </div>
        <div class="mh-grid__cell mh-grid__cell--4"> ... </div>
        <div class="mh-grid__cell mh-grid__cell--4"> ... </div>
    </div>
    ```

- Grid without gutter correction:

    ```html
    <div class="mh-grid mh-grid--no-gutter-correction">
        <div class="mh-grid__cell mh-grid__cell--6"> ... </div>
        <div class="mh-grid__cell mh-grid__cell--6"> ... </div>
    </div>
    ```

## Options

Size, keys and class names:

| Size     | Key    | Applies  | Class name           |
|----------|--------|----------|----------------------|
| Agnostic | *None* | *Always* | mh-grid__cell--*     |
| Smallest | xxs    | ≥ 0px    | mh-grid__cell--xxs-* |
| Smaller  | xs     | ≥ 320px  | mh-grid__cell--xs-*  |
| Small    | s      | ≥ 480px  | mh-grid__cell--s-*   |
| Medium   | m      | ≥ 768px  | mh-grid__cell--m-*   |
| Large    | l      | ≥ 1024px | mh-grid__cell--l-*   |
| Larger   | xl     | ≥ 1200px | mh-grid__cell--xl-*  |

## Customization

If you want to customize Mesh, you only need [Node](https://nodejs.org/)
*^0.10.0* and [Gulp](http://gulpjs.com/) *^3.9.0* up and running.

Since the only thing that you'll be probably modifying is the `$mesh` map and
its values, we assume you know how to do it. Knock yourself up!

## Contributing

Contributions are welcome! Please, read the
[contribution guidelines](contributing.md) first.

## License

© 2013-2015 MercadoLibre. Licensed under the MIT license.
