import Data from "../../components/Data";
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
  SHSelect,
  SHSelect1,
} from "../../components/Styled";
import Footer from "../../components/Footer/Footer.jsx";
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
    setProducts,
    categoryp,
    setCategoryp,
    amountp,
    setAmountp,
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
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <AddPSCFP1>Product Price</AddPSCFP1>
            <AddPSCFInp
              type="number"
              placeholder="Enter Product Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <AddPSCFP1>Amount</AddPSCFP1>
            <AddPSCFInp
              type="number"
              placeholder="amount"
              required
              value={amountp}
              onChange={(e) => setAmountp(e.target.value)}
            />
            {/* <AddPSCFP1>Category</AddPSCFP1>
            <SHSelect1 name="shop" className="SHSelect1" required >
              <option value="men's clothing" onChange={(e) => setCategoryp(e.target.value)}>men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </SHSelect1>
            <br /> */}
            <AddPSCFP1>Product Description</AddPSCFP1>
            <AddPSCFTAREA
              name="description"
              cols="45"
              placeholder="Enter Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></AddPSCFTAREA>
            <AddPSFBSEND>Add Product</AddPSFBSEND>
          </AddPSCD>
          <AddPSI></AddPSI>
        </AddPSContext>
      </AddPStyled>
      <Footer />
    </>
  );
}
