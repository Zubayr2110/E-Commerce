import styled from "styled-components";


// Single Page Styled

export const SSingleCOImg1 = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const SSingleCOT = styled.div`
  padding: 50px;
  width: 60%;
  height: 80%;
  border: var(--border);
  text-align: center;
`;
export const SSingleCOTH1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
`;
export const SSingleCOTP = styled.p`
  padding-top: 30px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: rgb(65, 65, 65);
`;
export const SSingleCOTPice = styled.p`
  padding-top: 30px;
  font-weight: bold;
  color: green;
  font-size: 40px;
  font-family: sans-serif;
`;
export const SSingleCOTB = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SSDingleCOTBtn1 = styled.button`
  width: 170px;
  height: 60px;
  border: none;
  outline: none;
  font-size: 30px;
  font-weight: bold;
  border-radius: 10px;
  background: blueviolet;
  box-shadow: 0px 0px 9px 1px rgb(132, 0, 255);
`;
export const SSDingleCOTBtn2 = styled.button`
  width: 150px;
  height: 60px;
  border: none;
  outline: none;
  font-size: 30px;
  margin-left: 50px;
  font-weight: bold;
  border-radius: 10px;
  background: greenyellow;
  box-shadow: 0px 0px 9px 1px green;
`;

// Single Page Styled end








// Sign Up Styled

export const StyledSignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;
export const StyledSignUpDiv = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  width: 430px;
  height: 700px;
  border-radius: 12px;
  padding: 48px 28px;
  background: var(--foundation-white-white-50, #fefefe);
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
  border: 2px solid green;
`;
export const StyledSignUpH1 = styled.h1`
  text-align: center;
  color: var(--foundation-grey-grey-900, #151515);
  font-family: sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const StyledSignUpFrame1 = styled.div`
  margin-top: 36px;
  width: 374px;
  height: 104px;
`;
export const StyledSignUpFrame11 = styled.button`
  cursor: pointer;
  width: 374px;
  height: 44px;
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--foundation-grey-grey-900, #151515);
  background-color: white;
  outline: none;
`;
export const StyledSignUpFrame12 = styled.button`
  cursor: pointer;
  outline: none;
  margin-top: 16px;
  width: 374px;
  height: 44px;
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--foundation-grey-grey-900, #151515);
  background-color: white;
`;
export const StyledSignUpFrame1Text = styled.p`
  margin-top: 15px;
  color: var(--foundation-grey-grey-900, #151515);
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const StyledSignUpDisting = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 374px;
  height: 15px;
`;

export const StyledSignUpDistinghr1 = styled.div`
  width: 120px;
  border: 1px solid;
`;
export const StyledSignUpDistingtext = styled.p`
  color: var(--black, #24272c);
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
// Style  form
export const StyledSignUpForm = styled.form`
  margin-top: 36px;
  width: 374px;
  height: 320px;
`;
export const StyledSignUpFormInp = styled.div`
  width: 100%;
  height: 68px;
`;

export const StyledSignUpFormInpLabel = styled.p`
  color: black;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
export const StyledSignUpFormInp1 = styled.input`
  width: 370px;
  height: 47px;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid var(--foundation-grey-grey-50, #ebebeb);
  background: var(--foundation-white-white-50, #fefefe);
  color: var(--foundation-grey-grey-900, #151515);
  font-feature-settings: "clig" off, "liga" off;
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  outline: none;
`;
export const StyledSignUpFormInp2 = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 68px;
`;
// Style Form end
// Styled Button and Text
export const StyledSignUpSBtn = styled.div`
  margin-top: 36px;
  width: 374px;
  height: 69px;
  // border: 1px solid;
`;
export const StyledSignUpBtn = styled.button`
  cursor: pointer;
  width: 374px;
  height: 40px;
  border-radius: 4px;
  background: var(--foundation-purple-purple-500, #6200ee);
  border: none;
  color: var(--foundation-white-white-50, #fefefe);
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const StyledSignUpSBtnP = styled.p`
  padding-top: 12px;
  color: var(--black, #24272c);
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;
export const StyledSignUpSBtnSpan = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--blue, #1b28bc);
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;

// Sign Up Styled end







// Sign In Styled Components

export const StyledSignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;
export const StyledSignInDiv = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 430px;
  height: 630px;
  border-radius: 12px;
  padding: 48px 28px;
  background: var(--foundation-white-white-50, #fefefe);
  box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
  border: 2px solid green;
`;
export const StyledSignInH1 = styled.h1`
  text-align: center;
  color: var(--foundation-grey-grey-900, #151515);
  font-family: sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const StyledSignInFrame1 = styled.div`
  margin-top: 36px;
  width: 374px;
  height: 104px;
`;
export const StyledSignInFrame11 = styled.button`
  cursor: pointer;
  width: 374px;
  height: 44px;
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--foundation-grey-grey-900, #151515);
  background-color: white;
  outline: none;
`;
export const StyledSignInFrame12 = styled.button`
  cursor: pointer;
  outline: none;
  margin-top: 16px;
  width: 374px;
  height: 44px;
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--foundation-grey-grey-900, #151515);
  background-color: white;
`;
export const StyledSignInFrame1Text = styled.p`
  margin-top: 15px;
  color: var(--foundation-grey-grey-900, #151515);
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const StyledSignInDisting = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 374px;
  height: 15px;
`;

export const StyledSignInDistinghr1 = styled.div`
margin-top: -16px;
  width: 120px;
  border: 1px solid;
`;
export const StyledSignInDistingtext = styled.p`
  color: var(--black, #24272c);
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
// Style  form
export const StyledSignInForm = styled.form`
  margin-top: 36px;
  width: 374px;
  height: 280px;
  // border: 1px solid;
`;
export const StyledSignInFormInp = styled.div`
  width: 100%;
  height: 68px;
`;
export const StyledSignInFormInpLabel = styled.p`
  color: black;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
export const StyledSignInFormInp1 = styled.input`
  width: 370px;
  height: 47px;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid var(--foundation-grey-grey-50, #ebebeb);
  background: var(--foundation-white-white-50, #fefefe);
  color: var(--foundation-grey-grey-900, #151515);
  font-feature-settings: "clig" off, "liga" off;
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  outline: none;
`;
export const StyledSignInFormInp2 = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 68px;
`;
// Style Form end

// Styled Button and Text
export const StyledSignInSBtn = styled.div`
  margin-top: 50px;
  width: 374px;
  height: 69px;
  // border: 1px solid;
`;
export const StyledSignInBtn = styled.button`
  cursor: pointer;
  width: 374px;
  height: 40px;
  border-radius: 4px;
  background: var(--foundation-purple-purple-500, #6200ee);
  border: none;
  color: var(--foundation-white-white-50, #fefefe);
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const StyledSignInSBtnP = styled.p`
  padding-top: 12px;
  color: var(--black, #24272c);
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;
export const StyledSignInSBtnSpan = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--blue, #1b28bc);
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;

// Sign In Styled Components end







// Footer Styled Components

export const SFooter = styled.footer`
  margin-top: 150px;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  bottom: 0;
  width: 100%;
`

// Fotoer Styled Components End 






// Card Styled Components

export const StyledCard = styled.div`
  cursor: pointer;
  margin-left: 40px;
  margin-top: 80px;
  width: 320px;
  height: 530px;
  border-radius: 10px;
  // border: 2px solid green;
  padding: 10px;
`
export const StyledCardImg = styled.div`
  width: 100%;
  height: 275px;
  display: flex;
  font-size: 35px;
`
export const StyledCardImg1 = styled.img`
  margin-top: 5px;
  margin-left: 50px;
`
export const StyledCardTitle = styled.p`
  font-family: sans-serif;
  height: 120px;
  max-height: 120px;
  font-size: 20px;
  font-weight: bold;
`
export const StyledCardPrice = styled.p`
font-weight: bold;
font-size: 25px;
`
export const StyledCardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: greenyellow;
  font-size: 25px;
`

export const StyledCards = styled.div`
  width: 100%;
  display: grid;
  border: var(--border);
  grid-template-columns: auto auto auto auto;
`
// Card Styled Components end







// AddProduct Styled Components

export const AddPStyled = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 1px solid;

`
export const AddPSContext = styled.div`
  width: 80%;
  // border: 1px solid;
`
export const AddPSContextH1 = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 50px;
`
export const AddPSCD = styled.form`
  padding:25px;
  margin: 0 auto;
  margin-top: 50px;
  width: 500px;
  height: 650px;
  border: 2px solid green;
  border-radius: 20px;
  box-shadow: 1px 1px 10px 1px greenyellow;
`
export const AddPSCFP = styled.label`
  font-weight: bold;
  font-size:20px;
`
export const AddPSCFInp = styled.input`
  padding: 15px;
  margin-top:20px;
  width: 100%;
  height: 50px;
  outline: none;
  font-size:25px;
  border: 2px solid green;
  border-radius: 10px;


`
export const AddPSCFP1 = styled.label`
  padding-top: 20px;
  font-weight: bold;
  font-size: 20px;
`
export const AddPSCFTAREA = styled.textarea`
margin-top: 20px;
padding: 10px;
outline: none;
height:220px;
max-height:220px;
border-radius:10px;
`
export const AddPSFBSEND = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius:10px;
  background-color: greenyellow;
  font-size:25px;
  font-weight:bold;
`
export const AddPSI = styled.div`
  width: 100%;
  display: grid;
  grid-template-column: auto auto auto auto;

`
// AddProduct Styled Components end







// Product Styled Components

export const ProductS = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`
export const ProductSD = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: auto auto auto auto;
`
// Product Styled Components end










// Basket Page Styled Components

export const BasketS = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100%;
  // border: 1px solid;
`
export const BasketSH1 = styled.h1`
  text-align: center;
  font-size: 50px;
  // border: 1px solid;
`
export const BasketSC = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  // border: 1px solid;
`
export const BasketSCM = styled.div`
  width: 70%;
  height: 100%;
  // border: 1px solid;
`

export const BasketSCMD =  styled.div`
  margin-top: 50px;
  padding: 20px;
  display: flex;
  width: 100%;
  height: 220px;
  border: 2px solid greenyellow;
  border-radius: 15px;
`
export const BasketSCMDI = styled.img`
  width: 180px;
  height: 170px;
  // border: 1px solid;
`
export const BasketSCMDT = styled.div`
  margin-left: 50px;
  width: 790px;
  height: 100%;
  // border: 1px solid;
`
export const BasketSCMDT1 = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  // border: 1px solid;
`
export const BasketSCMDT2 = styled.div`
  display: flex;
  // align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 55%;
  // border: 1px solid;
`
export const BasketSCMDT1T = styled.h2`
  font-size: 20px;
  max-width: 700px;
  width: 700px;
  height: 100%;
  // border: 1px solid;
`
export const BasketTrashIcon = styled.button`
  width: 90px;
  font-size: 40px;
  border: none;
  outline: none;
  background-color: white;
`

export const BasketSCMDT2C = styled.p`
  margin-top: 25px;
  font-weight: bold;
  max-width: 285px;
  width: 285px;
  height: 30px;
  font-size: 20px;
  // border: 1px solid;
`
export const BasketSCMDT2A = styled.div`
  margin-top: 17px;
  margin-left: 150px;
  display: flex;
  width: 200px;
  height: 60px;
  border-radius: 10px;
`
export const BasketSCMDT2A1 = styled.button`
  width: 60px;
  height: 100%;
  font-size: 35px;
  border: none;
  border-radius: 10px;
  background-color: white ;
  color: rgb(174, 174, 174);
`
export const BasketSCMDT2A2 = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  width: 78px;
  height: 100%;
`
export const BasketSCMDT2A3 = styled.button`
  width: 60px;
  height: 100%;
  font-size: 35px;
  border: none;
  border-radius: 10px;
  background-color: white ;
  color: rgb(174, 174, 174);
`

export const BasketSCMDT2Pr = styled.p`
  margin-left: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  width: 100px;
  height:100%;
  // border: 1px solid;
`


export const BasketSCS = styled.div`
  padding: 15px;
  margin-left: 99px;
  margin-top: 50px;
  width: 360px;
  height: 262px;
  border: 1px solid rgb(174, 174, 174);
  border-radius: 10px;
`
export const BasketSCST1 = styled.p`
  // border: 1px solid;
  font-size: 25px;
  font-weight: bold;
`
export const BasketSCST2 = styled.div`
  display: flex;
  // border: 1px solid;
  width: 100%;
  height: 30px;
`
export const BasketSCST21 = styled.p`
  width:50%;
  height: 100%;
  font-size: 20px;
  color: rgb(48, 48, 48);
  // border: 1px solid; 
`
export const BasketSCST3 = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  // border: 1px solid;
  width: 100%;
  height: 40px;
`
export const BasketSCST31 = styled.p`
  margin-top: 10px;
  font-size: 23px;
`
export const BasketSCST32 = styled.p`
  margin-top: 17px;
  margin-left: 169px;
  font-weight: bold;
  font-size: 23px;
  // border: 1px solid;
`