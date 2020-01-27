import React from "react"

import randomCombo from 'random-a11y-combo'
import WebFont from 'webfontloader'

import Layout from "../components/layout"
import SEO from "../components/seo"

import FitText from '@kennethormandy/react-fittext'

const Index = () => {
    const API_KEY = 'AIzaSyDDiO8nLVRMDaXwrJp61Cdcar5gFmmiR1Q';

    let fontsList = [];

    async function loadFontsList() {
        try {
            const result = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=' + API_KEY);
            const data = await result.json();
            console.log('loaded google fonts list: ', data.items.length);
            return data.items;
        } catch (error) {
            console.log('loadFontsList', error, error.message);
        }
    }

    async function loadRandomFont(fontsList) {
        const randomIndex = Math.floor(Math.random() * fontsList.length);
        const choosedFont = fontsList[randomIndex].family;
        WebFont.load({
            google: {
                families: [choosedFont + '&display=swap']
            }
        });
        console.log('choosed font: ', choosedFont);
        document.querySelector("p").style.fontFamily = choosedFont
    }

    async function main() {
        fontsList = await loadFontsList();
        const choosedFont = loadRandomFont(fontsList);
    }

    main();


    const boxStyles = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
    }

    const textStyle = {
        fontFamily: 'inherit',
        lineHeight: '1'
    }

    const [backgroundColor, color] = randomCombo()
    const style = Object.assign({}, boxStyles, {
        backgroundColor,
        color
    })

    return (
        <Layout>
            <SEO />
            <div style={style} className="box">
                <FitText compressor={1}>
                    <p style={textStyle}>
                        Okay,<br />Scrapbooker
                  </p>
                </FitText>
            </div>
        </Layout>
    )
}

export default Index
