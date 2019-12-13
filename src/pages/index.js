import React from "react"

import randomCombo from 'random-a11y-combo'

import Layout from "../components/layout"
import SEO from "../components/seo"

const boxStyles = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const [backgroundColor, color] = randomCombo()
const style = Object.assign({}, boxStyles, {
    backgroundColor,
    color
})

const IndexPage = () => (
    <Layout>
        <SEO title="Okay, scrapbooker" />

        <div style={style}>
            <h1>Okay, scrapbooker</h1>
        </div>
    </Layout>


)


export default IndexPage
