import React from 'react'
import Layout from './src/components/Layout'

export const onCreateWebpackConfig = ({ stage, actions, loaders }) => {
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
    return <Layout {...props}>{element}</Layout>
}