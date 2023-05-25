import SEO from "../components/seo"
import Logo from "../components/logo"
import { GatsbyLinkButton } from "../components/linkbutton"

const NotFoundPage = () => {
  return (
    <>
      <main className="page-index">
        <section className="logo">
          <Logo />
        </section>
        <section className="description">Error 404: Page Not Found</section>
        <section className="links">
          <GatsbyLinkButton to="/">Go Home!</GatsbyLinkButton>
        </section>
      </main>
    </>
  )
}

export default NotFoundPage

export const Head = () => (
  <SEO
    title="404: Page Not Found"
    description="The linked page does not exist!"
    image="/"
  />
)
