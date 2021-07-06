import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const NoButton = (props) => {
  return <SButton></SButton>;
};

const SButton = styled(BaseButton)`
  &:hover {
    background-color: #ff0000;
  }
`;
