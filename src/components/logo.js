import { StaticImage } from "gatsby-plugin-image"

const Logo = () => (
  <>
    <StaticImage
      className="logo-image"
      src="../data/icon.png"
      alt="BR logo - flat red"
    />
    <span className="logo-text">ROYALE STATION 13</span>
  </>
)

export default Logo
