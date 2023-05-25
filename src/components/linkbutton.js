import { Link } from "gatsby"

export const LinkButton = ({
  children,
  blank,
  href,
  className,
  color,
  ...rest
}) => {
  return (
    <a
      className={`link-button${className ? " " + className : ""}${
        color ? " link-button-color-" + color : ""
      }`}
      href={href}
      target={blank ? "_blank" : null}
      rel={blank ? "noopener noreferrer" : null}
      {...rest}
    >
      {children}
    </a>
  )
}

export const GatsbyLinkButton = ({
  children,
  to,
  className,
  color,
  ...rest
}) => {
  return (
    <Link
      className={`link-button${className ? " " + className : ""}${
        color ? " link-button-color-" + color : ""
      }`}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  )
}
