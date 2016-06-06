/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var upstreamMergeTrees = require('broccoli-merge-trees');

// from: https://github.com/ember-cli/ember-cli/blob/master/lib/models/addon.js#L25
function mergeTrees(inputTree, options) {
    options = options || {};
    options.description = options.annotation;
    var tree = upstreamMergeTrees(inputTree, options);

    tree.description = options && options.description;

    return tree;
}

module.exports = {
    name: 'ember-flag-icon-css',
    treeForPublic: function(tree) {
        var baseTree = this._super.treeForPublic(...arguments);

        var flagsFunnel = new Funnel(
            this.app.trees.bower, {
                srcDir: path.join('flag-icon-css', 'flags'),
                destDir: path.join('assets', 'flags')
            }
        );
        var cssFunnel = new Funnel(
            this.app.trees.bower, {
                srcDir: path.join('flag-icon-css', 'css'),
                destDir: path.join('assets', 'css')
            }
        );

        return mergeTrees([flagsFunnel, cssFunnel, baseTree, tree].filter(Boolean));
    }
};
