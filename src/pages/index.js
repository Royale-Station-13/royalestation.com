import SEO from "../components/seo"
import { FaDiscord, FaGithub, FaPatreon } from "react-icons/fa"
import { GatsbyLinkButton, LinkButton } from "../components/linkbutton"
import Logo from "../components/logo"
import PatreonBar from "../components/patreonbar"

const IndexPage = () => {
  return (
    <>
      <main className="page-index">
        <section className="logo">
          <Logo />
        </section>
        <section className="description">
          <span className="desc-text">
            A Space Station 13 Battle Royale server
          </span>
          <br />
          <span className="desc-text smaller">Only one player survives!</span>
        </section>
        <section className="links">
          <GatsbyLinkButton to="/about">About</GatsbyLinkButton>
          <GatsbyLinkButton to="/rules">Rules</GatsbyLinkButton>
        </section>
        <section className="links">
          <LinkButton
            color="blurple"
            href="https://discord.gg/m5wTK9fxa3"
            blank
          >
            <FaDiscord /> Discord
          </LinkButton>
          <LinkButton
            color="black"
            href="https://github.com/Royale-Station-13/Royale-Station-13"
            blank
          >
            <FaGithub /> GitHub
          </LinkButton>
          <LinkButton
            color="orange"
            href="https://patreon.com/RoyaleStation13"
            blank
          >
            <FaPatreon /> Patreon
          </LinkButton>
        </section>
        <section className="links">
          <LinkButton
            className="special"
            href="byond://play.royalestation13.com:1337/"
          >
            JOIN GAME
          </LinkButton>
        </section>
        <section className="text-section">
          <h1>Funding Goal</h1>
          <PatreonBar pid={10567200} />
        </section>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => (
  <SEO
    keywords={[
      `Space Station 13`,
      `RoyaleStation`,
      `Royale Station 13`,
      `Battle Royale`,
      `SS13`,
      `SS13 server`,
      `SS13 battle royale`,
      `combat server`,
    ]}
  />
)
