import Header from "../../components/Header/Header";
import { LikeSC, LikeSCM } from "../../components/Styled";
import { useGlobalContext } from "../../context";
import "./Like.css";
import LikeCards from "./LikeCards";

export default function Like() {
  const { likeF } = useGlobalContext();
  return (
    <>
      <Header />
      <LikeSC>
        <LikeSCM>
          {likeF.map((item) => (
            <LikeCards key={item.id} {...item} />
          ))}
        </LikeSCM>
      </LikeSC>
    </>
  );
}
