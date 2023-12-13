import { useGlobalContext } from "../../context";
import HCard from "./HCard";

export default function HCards() {
  const { data } = useGlobalContext();
  // console.log(data);
  return (
    <>
      {data.map((item) => (
        <HCard key={item.id} {...item} />
      ))}
    </>
  );
}
