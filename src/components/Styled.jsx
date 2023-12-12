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
  height: 778px;
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
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: fixed;
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
  height: 470px;
  border-radius: 10px;
  border: 2px solid green;
  padding: 10px;
`
export const StyledCardImg = styled.div`
  width: 100%;
  height: 275px;
  display: flex;
  font-size: 35px;
  border: var(--border);
`
export const StyledCardImg1 = styled.img`
  margin-top: 5px;
  margin-left: 50px;
`
export const StyledCardTitle = styled.p`
  font-family: sans-serif;
  font-size: 20px;
  font-weight: bold;
`
export const StyledCardPrice = styled.p`
font-weight: bold;
font-size: 25px;
border: var(--border);
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