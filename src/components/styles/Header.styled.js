import styled from "styled-components";

export const StyledHeader = styled.header`
  * {
    color: ${({ theme }) => theme.color};
    cursor: pointer;
  }
`;

StyledHeader.defaultProps = {
  theme: {
    color: "#000000",
  },
};
