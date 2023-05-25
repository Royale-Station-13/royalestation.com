import SEO from "../components/seo"
import { FaDiscord, FaGithub } from "react-icons/fa"
import { GatsbyLinkButton, LinkButton } from "../components/linkbutton"
import Logo from "../components/logo"

const IndexPage = () => {
  return (
    <>
      <main className="page-index">
        <section className="logo">
          <Logo />
        </section>
        <section className="description">
          <span className="sub-desc">
            A Space Station 13 Battle Royale server
          </span>
          <br />
          <span className="sub-desc smaller">Only one player survives!</span>
        </section>
        <section className="links">
          <GatsbyLinkButton to="/about">About</GatsbyLinkButton>
          <GatsbyLinkButton to="/rules">Rules</GatsbyLinkButton>
        </section>
        <section className="links">
          <LinkButton href="https://discord.gg/m5wTK9fxa3" blank>
            <FaDiscord /> Discord
          </LinkButton>
          <LinkButton
            href="https://github.com/Royale-Station-13/Royale-Station-13"
            blank
          >
            <FaGithub /> GitHub
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
