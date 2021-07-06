import styled from "styled-components";

export const Logo = (props) => {
  const { children } = props;
  return <SImg src={children} alt="logo" />;
};

const SImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 240px;
`;
