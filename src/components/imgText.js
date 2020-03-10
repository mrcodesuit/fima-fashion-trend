import React, { useState } from "react"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import {
  pinkAreaAnimation,
  yellowAreaAnimation,
  grayAreaAnimation,
  blueAreaAnimation,
} from "../animation/pageAnimations"
import { elementInViewport } from "../util/util"
import ArrowRight from "../images/arrow-right.svg"

const ImgText = () => {
  const data = useStaticQuery(graphql`
    query {
      girlPink: file(relativePath: { eq: "girlPink.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headphones: file(relativePath: { eq: "headphones.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bag: file(relativePath: { eq: "bag.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blackWoman: file(relativePath: { eq: "blackWoman.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      yellowGirl: file(relativePath: { eq: "yellowGirl.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoes: file(relativePath: { eq: "shoes.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coffee: file(relativePath: { eq: "coffee.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blueGirl: file(relativePath: { eq: "blueGirl.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [statePinkArea, setStatePinkArea] = useState(false)
  const [stateYellowArea, setStateYellowArea] = useState(false)
  const [stateGrayArea, setStateGrayArea] = useState(false)
  const [stateBlueArea, setStateBlueArea] = useState(false)

  useScrollPosition(() => {
    if (statePinkArea === false) {
      elementInViewport(
        "pink-main-content",
        pinkAreaAnimation,
        setStatePinkArea
      )
    }
    if (stateYellowArea === false) {
      elementInViewport(
        "yellow-main-content",
        yellowAreaAnimation,
        setStateYellowArea
      )
    }

    if (stateGrayArea === false) {
      elementInViewport(
        "gray-main-content",
        grayAreaAnimation,
        setStateGrayArea
      )
    }
    if (stateBlueArea === false) {
      elementInViewport(
        "blue-main-content",
        blueAreaAnimation,
        setStateBlueArea
      )
    }
  })

  return (
    <section className="main-content">
      {/* pinkArea */}
      <div className="pinkArea" id="pink-main-content">
        <div className="img-wrapper">
          <Img fluid={data.girlPink.childImageSharp.fluid} objectFit="cover" />
        </div>
        <div className="content-wrapper">
          <div className="square-small-wrapper">
            <div className="square-small">
              <Img
                fluid={data.headphones.childImageSharp.fluid}
                objectFit="cover"
                loading="auto"
              />
            </div>
            <p className="title">Headphone</p>
            <div className="subtitle">$90</div>
          </div>
          <div className="square-medium-wrapper">
            <div className="square-medium">
              <Img fluid={data.bag.childImageSharp.fluid} objectFit="cover" />
            </div>
            <p className="title">Backpak</p>
            <div className="subtitle">$130</div>
          </div>
        </div>
      </div>
      {/* grayArea */}
      <div className="grayArea" id="gray-main-content">
        <div className="content-wrapper">
          <div className="content-wrapper-inner">
            <h2 className="main-heading">Summer Fashion</h2>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est
              repudiandae nemo error. Eum voluptatibus, sed incidunt.
            </p>
            <Link to="#">
              <div className="btn-row">
                Discover
                <ArrowRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="img-wrapper">
          <Img
            fluid={data.blackWoman.childImageSharp.fluid}
            objectFit="cover"
          />
        </div>
      </div>
      {/*  yellowArea*/}
      <div className="yellowArea" id="yellow-main-content">
        <div className="img-wrapper">
          <Img
            fluid={data.yellowGirl.childImageSharp.fluid}
            objectFit="cover"
          />
        </div>
        <div className="content-wrapper">
          <div className="square-small-wrapper">
            <div className="square-small">
              <Img fluid={data.shoes.childImageSharp.fluid} objectFit="cover" />
            </div>
            <p className="title">Headphone</p>
            <div className="subtitle">$90</div>
          </div>
          <div className="square-medium-wrapper">
            <div className="square-medium">
              <Img
                fluid={data.coffee.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>
            <p className="title">Backpak</p>
            <div className="subtitle">$130</div>
          </div>
        </div>
      </div>
      {/* blueArea */}
      <div className="blueArea" id="blue-main-content">
        <div className="content-wrapper">
          <div className="content-wrapper-inner">
            <h2 className="main-heading">Winter Fashion</h2>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est
              repudiandae nemo error. Eum voluptatibus, sed incidunt.
            </p>
            <Link to="#">
              <div className="btn-row">
                Discover
                <ArrowRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="img-wrapper">
          <Img fluid={data.blueGirl.childImageSharp.fluid} objectFit="cover" />
        </div>
      </div>
    </section>
  )
}

export default ImgText
