import React from "react"

import randomCombo from 'random-a11y-combo'

import Layout from "../components/layout"
import SEO from "../components/seo"


const boxStyles = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px'
}

const textStyle = {
    fontSize: 'calc(18vw - 32px)'
}

const [backgroundColor, color] = randomCombo()
const style = Object.assign({}, boxStyles, {
    backgroundColor,
    color
})


const IndexPage = () => (
    <Layout>
        <SEO />
        <div style={style} class="box">
            <h1 style={textStyle}>Okay, Scrapbooker</h1>
        </div>
    </Layout>
)

export default IndexPage
