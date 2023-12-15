import { useGlobalContext } from "../../context";
import HCard from "./HCard";

export default function HCards() {
  const { data } = useGlobalContext();

  if (!data) {
    console.log(data);
    return <p>Loading...</p>;
  }
  return (
    <>
      {data.map((item) => (
        <HCard key={item.id} {...item} />
      ))}
    </>
  );
}
