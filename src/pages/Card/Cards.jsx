import { AddPSI } from "../../components/Styled";
import { useGlobalContext } from "../../context";
import Card from "./Card";

export default function Cards() {
  const { products } = useGlobalContext()
  return (
    <>
      {products.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </>
  );
}
