import { TfiArrowCircleUp } from "react-icons/tfi";
import { GoToTopButtonStyle } from "./style";

export const GoToTop = () => {
  return (
    <GoToTopButtonStyle
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <TfiArrowCircleUp color="white" size={48} />
    </GoToTopButtonStyle>
  );
};
