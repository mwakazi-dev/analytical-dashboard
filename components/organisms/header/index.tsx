import { FC } from "react";

import { StyledHeader } from "@/styles/header";
import { StyledTitle } from "@/styles/title";

interface Props {
  title: string;
}
/**
 * A styled header component which displays a title.
 *
 * @param {object} props - Props of the component.
 * @param {string} props.title - The title to be displayed.
 *
 * @returns {React.ReactElement} The header component.
 */
const Header: FC<Props> = ({ title }) => {
  return (
    <StyledHeader>
      <StyledTitle level={4}>{title}</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
