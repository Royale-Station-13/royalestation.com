import SEO from "../components/seo"
import Logo from "../components/logo"
import { GatsbyLinkButton } from "../components/linkbutton"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  let {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { slug: { eq: "rules" } } }) {
        nodes {
          html
        }
      }
    }
  `)

  let html = nodes[0].html

  return (
    <>
      <main className="page-rules">
        <section className="logo">
          <Logo />
        </section>
        <section className="description">SERVER RULES</section>
        <section className="rules">
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
    title="Royale Station 13 Rules"
    keywords={[
      `Royale Station rules`,
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
