const react = require('react')

exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /webfontloader/,
                        loader: loaders.null(),
                    }
                ]
            }
        })
    }
}