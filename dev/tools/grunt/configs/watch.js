/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';

var combo  = require('./combo'),
    themes = require('./themes'),
    _      = require('underscore');

var themeOptions = {};

_.each(themes, function(theme, name) {
    themeOptions[name] = {
        "files": [
            "<%= combo.autopath(\""+name+"\", path.pub) %>/**/*.less"
        ],
        "tasks": "less:" + name
    };
});

var watchOptions = {
    "setup": {
        "files": "<%= path.less.setup %>/**/*.less",
        "tasks": "less:setup"
    },
    "reload": {
        "files": "<%= path.pub %>/**/*.css",
        "options": {
            livereload: true
        }
    }
};

module.exports = _.extend(themeOptions, watchOptions);
