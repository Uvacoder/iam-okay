import React from 'react'
import Helmet from 'react-helmet'

const defaultTitle = 'Okay, Scrapbooker'
const defaultDescription =
    'Okay. Okay. Okay. '
const defaultImage = 'https://screenshot-v2.now.sh/okay-beta-lake.now.sh/'

const SEO = props => (
    <Helmet>
        <title>
            {defaultTitle}
        </title>
        <meta
            name="description"
            content={props.description ? props.description : defaultDescription}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={defaultTitle} />
        <meta
            property="og:title"
            content={defaultTitle}
        />
        <meta
            property="og:description"
            content={defaultDescription}
        />
        <meta
            property="og:image"
            content={defaultImage}
        />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@iammatthias" />
        <meta
            name="twitter:title"
            content={defaultTitle}
        />
        <meta
            name="twitter:description"
            content={defaultDescription}
        />
        <meta
            name="twitter:image"
            content={defaultImage}
        />
    </Helmet>
)

export default SEO