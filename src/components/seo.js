import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import icon from "./../data/icon.png"

function SEO({ description, lang, keywords, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const imageDef = image === "/" ? "" : image || icon
  const metaTitle = `${title || site.siteMetadata.title}`
  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      {lang && <html lang={lang} />}
      {metaTitle && <title>{metaTitle}</title>}
      {metaDescription && <meta name="description" content={metaDescription} />}
      {keywords.length && (
        <meta name="keywords" content={keywords.concat(",")} />
      )}
      {metaTitle && <meta name="og:title" content={metaTitle} />}
      {metaDescription && (
        <meta name="og:description" content={metaDescription} />
      )}
      <meta name="og:type" content="website" />
      {imageDef && <meta name="og:image" content={imageDef} />}
      {metaTitle && <meta name="twitter:title" content={metaTitle} />}
      {metaDescription && (
        <meta name="twitter:description" content={metaDescription} />
      )}
      <meta name="twitter:card" content="summary" />
      {imageDef && <meta name="twitter:image" content={imageDef} />}
      {site.siteMetadata.author && (
        <meta name="twitter:creator" content={site.siteMetadata.author} />
      )}
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default SEO
