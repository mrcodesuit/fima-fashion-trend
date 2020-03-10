import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HomeSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      slideOne: file(relativePath: { eq: "slideOne.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slideTwo: file(relativePath: { eq: "slideTwo.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slideThree: file(relativePath: { eq: "slideThree.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      <div className="slide slideOne">
        <Img fluid={data.slideOne.childImageSharp.fluid} objectFit="cover" />
        <div className="slide-content">
          <h1>Trend and Fashion</h1>
          <p className="time">2018-2019</p>
          <div className="btn-row">Discover</div>
        </div>
      </div>
      <div className="slide slideTwo">
        <Img fluid={data.slideTwo.childImageSharp.fluid} objectFit="cover" />
        <div className="slide-content">
          <h1>More Fashion for you</h1>
          <p className="time">2019-2020</p>
          <div className="btn-row">Discover</div>
        </div>
      </div>
      <div className="slide slideThree">
        <Img fluid={data.slideThree.childImageSharp.fluid} objectFit="cover" />
        <div className="slide-content">
          <h1>More Fashion for you</h1>
          <p className="time">2019-2020</p>
          <div className="btn-row">Discover</div>
        </div>
      </div>
    </Slider>
  )
}

export default HomeSlider
