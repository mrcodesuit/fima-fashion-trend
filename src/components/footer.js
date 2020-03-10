import React from "react"
import { Link } from "gatsby"

import Pinterest from "../images/pinterest.svg"
import Dribbble from "../images/dribbble.svg"
import Behance from "../images/behance.svg"
import ArrowRight from "../images/arrow-right.svg"

const Footer = () => {
  return (
    <footer>
      <h2>Subscribe to Newsletter</h2>
      <div className="form-wrapper">
        <input type="text" placeholder="Your Email" />
        <div className="btn-row">
          Subscribe <ArrowRight />
        </div>
      </div>
      <div className="from">
        {" "}
        <ul className="social-links">
          <li>
            <Link href="#">
              <Pinterest />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Dribbble />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Behance />
            </Link>
          </li>
        </ul>
        Design ♡ Kawsar | Code ♡ codesuit (Mirko)
      </div>
    </footer>
  )
}

export default Footer
