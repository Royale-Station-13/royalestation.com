import SEO from "../components/seo"
import Logo from "../components/logo"
import { GatsbyLinkButton } from "../components/linkbutton"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  let {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { slug: { eq: "about" } } }) {
        nodes {
          html
        }
      }
    }
  `)

  let html = nodes[0].html

  return (
    <>
      <main className="page-about">
        <section className="logo">
          <Logo />
        </section>
        <section className="description">
          <span className="desc-text">ABOUT THE SERVER</span>
        </section>
        <section className="about">
          <div style={{ textAlign: "center" }}>
            <GatsbyLinkButton to="/">Main Page</GatsbyLinkButton>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => (
  <SEO
    title="About Royale Station 13"
    keywords={[
      `Space Station 13`,
      `RoyaleStation`,
      `Royale Station 13`,
      `Battle Royale`,
      `SS13`,
      `SS13 server`,
      `SS13 battle royale`,
      `combat server`,
      `rules`,
    ]}
  />
)
