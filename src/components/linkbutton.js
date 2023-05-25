import { Link } from "gatsby"

export const LinkButton = ({ children, blank, href, className, ...rest }) => {
  return (
    <a
      className={`link-button${className ? " " + className : ""}`}
      href={href}
      target={blank ? "_blank" : null}
      rel={blank ? "noopener noreferrer" : null}
      {...rest}
    >
      {children}
    </a>
  )
}

export const GatsbyLinkButton = ({ children, to, className, ...rest }) => {
  return (
    <Link
      className={`link-button${className ? " " + className : ""}`}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  )
}
