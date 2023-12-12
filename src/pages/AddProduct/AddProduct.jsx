import Header from "../../components/Header/Header";
import {
  AddPSCD,
  AddPSCFInp,
  AddPSCFP,
  AddPSCFP1,
  AddPSCFTAREA,
  AddPSContext,
  AddPSContextH1,
  AddPSFBSEND,
  AddPSI,
  AddPStyled,
} from "../../components/Styled";
import { useGlobalContext } from "../../context";

export default function AddProduct() {
  const {
    addProduct,
    description,
    setDescription,
    title,
    setTitle,
    price,
    setPrice,
    img,
    setImg,
  } = useGlobalContext();
  return (
    <>
      <Header />
      <AddPStyled>
        <AddPSContext>
          <AddPSContextH1>Add Product</AddPSContextH1>
          <AddPSCD onSubmit={addProduct}>
            <AddPSCFP>Product Name</AddPSCFP>
            <AddPSCFInp
              type="text"
              placeholder="Enter Product Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <AddPSCFP1>Product Price</AddPSCFP1>
            <AddPSCFInp
              type="number"
              placeholder="Enter Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <AddPSCFP1>Product Description</AddPSCFP1>
            <AddPSCFTAREA
              name="description"
              cols="45"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></AddPSCFTAREA>
            <AddPSFBSEND>Add Product</AddPSFBSEND>
          </AddPSCD>
          <AddPSI>
            
          </AddPSI>
        </AddPSContext>
      </AddPStyled>
    </>
  );
}
