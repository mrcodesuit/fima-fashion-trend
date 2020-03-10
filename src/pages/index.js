import React from "react"

import "normalize.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/style.css"
import "../styles/styles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeSlider from "../components/homeSlider"
import ImgText from "../components/imgText"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeSlider />
    <ImgText />
  </Layout>
)

export default IndexPage
