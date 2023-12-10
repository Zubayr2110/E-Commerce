import styled from "styled-components";
import Header from "../../components/Header/Header";
import { useGlobalContext } from "../../context";
import { SignUpImg1, SignUpImg2 } from "../../components/export_img";
import { useNavigate } from "react-router-dom";

const StyledSignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;
const StyledSignUpDiv = styled.div`
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
const StyledSignUpH1 = styled.h1`
  text-align: center;
  color: var(--foundation-grey-grey-900, #151515);
  font-family: sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const StyledSignUpFrame1 = styled.div`
  margin-top: 36px;
  width: 374px;
  height: 104px;
`;
const StyledSignUpFrame11 = styled.button`
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
const StyledSignUpFrame12 = styled.button`
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
const StyledSignUpFrame1Text = styled.p`
  margin-top: 15px;
  color: var(--foundation-grey-grey-900, #151515);
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const StyledSignUpDisting = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 374px;
  height: 15px;
`;

const StyledSignUpDistinghr1 = styled.div`
  width: 120px;
  border: 1px solid;
`;
const StyledSignUpDistingtext = styled.p`
  color: var(--black, #24272c);
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
// Style  form
const StyledSignUpForm = styled.form`
  margin-top: 36px;
  width: 374px;
  height: 320px;
`;
const StyledSignUpFormInp = styled.div`
  width: 100%;
  height: 68px;
`;
const StyledSignUpFormInpLabel = styled.p`
  color: black;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
const StyledSignUpFormInp1 = styled.input`
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
const StyledSignUpFormInp2 = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 68px;
`;
// Style Form end

// Styled Button and Text
const StyledSignUpSBtn = styled.div`
  margin-top: 36px;
  width: 374px;
  height: 69px;
  // border: 1px solid;
`;
const StyledSignUpBtn = styled.button`
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
const StyledSignUpSBtnP = styled.p`
  padding-top: 12px;
  color: var(--black, #24272c);
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;
const StyledSignUpSBtnSpan = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--blue, #1b28bc);
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
`;
// Styled Button and Text end


// Styled Components end

export default function SignUp() {
  const navigate = useNavigate();
  const { handleSubmit, name, setName } = useGlobalContext();
  return (
    <>
      <StyledSignUpContainer>
        <StyledSignUpDiv>
          <StyledSignUpH1>Sign Up</StyledSignUpH1>
          <StyledSignUpFrame1>
            <StyledSignUpFrame11>
              <img src={SignUpImg1} alt="icon" />
              <StyledSignUpFrame1Text>
                Continue with Google
              </StyledSignUpFrame1Text>
            </StyledSignUpFrame11>
            <StyledSignUpFrame12>
              <img src={SignUpImg2} alt="icon" />
              <StyledSignUpFrame1Text>
                Continue with Google
              </StyledSignUpFrame1Text>
            </StyledSignUpFrame12>
          </StyledSignUpFrame1>

          <StyledSignUpDisting>
            <StyledSignUpDistinghr1 />
            <StyledSignUpDistingtext>OR</StyledSignUpDistingtext>
            <StyledSignUpDistinghr1 />
          </StyledSignUpDisting>

          <StyledSignUpForm>
            <StyledSignUpFormInp>
              <StyledSignUpFormInpLabel>Your username</StyledSignUpFormInpLabel>
              <StyledSignUpFormInp1
                placeholder="Enter your username"
                required
                type="text"
              ></StyledSignUpFormInp1>
            </StyledSignUpFormInp>
            <StyledSignUpFormInp2>
              <StyledSignUpFormInpLabel>Your Email</StyledSignUpFormInpLabel>
              <StyledSignUpFormInp1
                type="email"
                placeholder="Enter your Email"
                required
              ></StyledSignUpFormInp1>
            </StyledSignUpFormInp2>
            <StyledSignUpFormInp2>
              <StyledSignUpFormInpLabel>Your Password</StyledSignUpFormInpLabel>
              <StyledSignUpFormInp1
                type="password"
                placeholder="Enter your Password"
                required
              ></StyledSignUpFormInp1>
            </StyledSignUpFormInp2>
            <StyledSignUpFormInp2>
              <StyledSignUpFormInpLabel>
                Confirm Password
              </StyledSignUpFormInpLabel>
              <StyledSignUpFormInp1
                type="password"
                placeholder="Enter your Password"
                required
              ></StyledSignUpFormInp1>
            </StyledSignUpFormInp2>
          </StyledSignUpForm>
          <StyledSignUpSBtn>
            <StyledSignUpBtn>Send</StyledSignUpBtn>
            <StyledSignUpSBtnP>
              Already signed up?{" "}
              <StyledSignUpSBtnSpan href="/signin/user">
                Go to sign in.
              </StyledSignUpSBtnSpan>
            </StyledSignUpSBtnP>
          </StyledSignUpSBtn>
        </StyledSignUpDiv>
      </StyledSignUpContainer>
    </>
  );
}
