module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),

        'banner': {
            'full': [
                '/*!',
                ' * Mesh v<%= pkg.version %>',
                ' * http://github.com/mercadolibre/mesh',
                ' *',
                ' * Copyright (c) <%= grunt.template.today("yyyy") %>, MercadoLibre',
                ' * Released under the MIT license.',
                ' */\n'
            ].join('\n'),
            'min': '/*! Mesh v<%= pkg.version %> http://github.com/mercadolibre/mesh | MIT license */'
        },

        'copy': {
            'main': {
                'files': [
                    {'src': './mesh.css', 'dest': 'dist/mesh.css', 'filter': 'isFile'}
                ]
            }
        },

        'usebanner': {
            'taskName': {
                'options': {
                    'position': 'top',
                    'banner': '<%= banner.full %>',
                    'linebreak': false
                },
                'files': {
                    'src': ['dist/mesh.css']
                }
            }
        },

        'cssmin': {
            'options': {
                'banner': '<%= banner.min %>',
                'keepSpecialComments': 0
            },

            'mesh': {
                'src': ['mesh.css'],
                'dest': 'dist/mesh.min.css'
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Resgister task(s).
    grunt.registerTask('default', []);
    grunt.registerTask('dist', ['copy', 'usebanner', 'cssmin']);
};