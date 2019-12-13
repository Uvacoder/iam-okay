import React from 'react'
import Helmet from 'react-helmet'

const defaultTitle = 'Okay, Scrapbooker'
const defaultDescription =
    'Okay. Okay. Okay. '
const defaultImage = 'blob:https://zeit.co/35559f61-ece2-0b47-9e7a-1d28693839ba'

const SEO = props => (
    <Helmet>
        <title>
            {props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}
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

        {props.image ? (
            <meta
                property="og:image"
                content={defaultImage}
            />
        ) : null}

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
        {props.image ? (
            <meta
                name="twitter:image"
                content={defaultImage}
            />
        ) : null}
    </Helmet>
)

export default SEO