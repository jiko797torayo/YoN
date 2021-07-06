import { Logo } from "../atoms/Logo";
import { NoButton } from "../atoms/NoButton";
import { YesButton } from "../atoms/YesButton";

export const Answer = () => {
  return (
    <div>
      <Logo>https://nihon-inc.com/images/nihon_inc_logo.svg</Logo>
      <NoButton></NoButton>
      <YesButton></YesButton>
    </div>
  );
};
