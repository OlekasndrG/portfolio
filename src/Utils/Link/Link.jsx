import { AnchorLink } from "./Link.styled";
import PropTypes from "prop-types";
const CustomLink = ({ section = "#", children }) => {
  return (
    <AnchorLink to={section} smooth={true} duration={500} offset={-150}>
      {children}
    </AnchorLink>
  );
};

CustomLink.propTypes = {
  section: PropTypes.string,
  children: PropTypes.node,
};

export default CustomLink;
