# Mesh

Mesh is a responsive, mobile first fluid grid system, built on LESS, for easy customization.

## Development setup

- Clone
- Run `npm install && bower install` in the command line to install project dependencies.
- Run `gulp` to build dist files. 
- Run `gulp watch` to create a server in node and run the demo in the browser.
- Run `gulp demo` to create a working demo of the component in a "demo" folder.
- Run `gulp upload-demo` to automagically push last changes go the demo page in gh-pages branch.

## Use guide

By default mesh uses a 12 column grid system: it divides the space available by 12.

To give your columns the desired width, use the class .mesh-col-# + the number of columns you want this element to measure. The columns must add up 12 to cover the whole space available. By default, the gutter between each column is 30px.

E.g., you can have a `<div class="mesh-col-3"></div>` next to a `<div class="mesh-col-9"></div>`. This is a narrow side-bar and a main content area layout. Both add up 12. 

In mobile devices your columns will also use all the space available (as in desktop) but stack up one below the other while from tablets they end up next to each other. E.g., `<div class="mesh-col-xs-12 mesh-col-s-4"></div>` next to a `<div class="mesh-col-xs-12 mesh-col-s-8"></div>`.
You can use as many elements in your container but they must add up to 12 so you do not have empty spaces in your grid.

You can use as many elements in your container as you want, but they must always add up 12. Otherwise, you'll end up with undesired spaces in your grid.

The available classes to target different screen resolutions are:

- `.mesh-col-xxs-[1-12]` 0px and up.
- `.mesh-col-xs-[1-12]` Targets phone devices and up (320px =<).
- `.mesh-col-s-[1-12]` Targets large screen phone devices and up (480px =<).
- `.mesh-col-m-[1-12]` Targets tablet devices and up (768 =<).
- `.mesh-col-l-[1-12]` Targets landscape tablets, laptops, desktops and up (1024 =<).
- `.mesh-col-xl-[1-12]` Targets big desktops and up (1200 =<).

__Basic class__:
- `.mesh-col-[1-12]` Is device agnostic, uses the same width proportion through all devices and resolutions.

## Options

In the variables.less file you can customize mesh. Change the breakpoints, set the total number of columns if you dislike 12, and change the gutter size.
After changing the settings don't forget to re-build the component running the `gulp` command, the css files are compiled in the dist folder ready to be used in your personal project.

[Demo page](http://jota-v.github.io/mesh/)

__NOTE__

Please read through our code style guides:
- [HTML](https://github.com/mercadolibre/html-style-guide)
- [CSS](https://github.com/mercadolibre/css-style-guide)

## Maintained by

- Her Mammana ([@hmammana](https://twitter.com/hmammana))
- Lean Linares ([@lean8086](https://twitter.com/lean8086))
- Juan Vanni ([@jota_v_](https://twitter.com/jota_v_))

## Credits

![MercadoLibre](http://static.mlstatic.com/org-img/chico/img/logo-mercadolibre-new.png)

## License

Licensed under the MIT license.

Copyright (c) 2013 [MercadoLibre](http://github.com/mercadolibre).
