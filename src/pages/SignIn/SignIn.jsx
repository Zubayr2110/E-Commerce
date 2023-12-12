import styled from "styled-components";
import { SignUpImg1, SignUpImg2 } from "../../components/export_img";
import {
  StyledSignInBtn,
  StyledSignInContainer,
  StyledSignInDisting,
  StyledSignInDistinghr1,
  StyledSignInDistingtext,
  StyledSignInDiv,
  StyledSignInForm,
  StyledSignInFormInp,
  StyledSignInFormInp1,
  StyledSignInFormInp2,
  StyledSignInFormInpLabel,
  StyledSignInFrame1,
  StyledSignInFrame11,
  StyledSignInFrame12,
  StyledSignInFrame1Text,
  StyledSignInH1,
  StyledSignInSBtn,
  StyledSignInSBtnP,
  StyledSignInSBtnSpan,
} from "../../components/Styled";
import { useGlobalContext } from "../../context";
import { getUser } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate()
  const { login, name, setName, password, setPassword } = useGlobalContext()


  return (
    <StyledSignInContainer>
      <StyledSignInDiv>
        <StyledSignInH1>Sign In</StyledSignInH1>

        <StyledSignInFrame1>
          <StyledSignInFrame11>
            <img src={SignUpImg1} alt="icon" />
            <StyledSignInFrame1Text>
              Continue with Google
            </StyledSignInFrame1Text>
          </StyledSignInFrame11>
          <StyledSignInFrame12>
            <img src={SignUpImg2} alt="icon" />
            <StyledSignInFrame1Text>
              Continue with Google
            </StyledSignInFrame1Text>
          </StyledSignInFrame12>
        </StyledSignInFrame1>

        <StyledSignInDisting>
          <StyledSignInDistinghr1 />
          <StyledSignInDistingtext>OR</StyledSignInDistingtext>
          <StyledSignInDistinghr1 />
        </StyledSignInDisting>

        <StyledSignInForm>
          <StyledSignInFormInp>
            <StyledSignInFormInpLabel>Your username</StyledSignInFormInpLabel>
            <StyledSignInFormInp1
              placeholder="Enter your username"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></StyledSignInFormInp1>
          </StyledSignInFormInp>
          <StyledSignInFormInp2>
            <StyledSignInFormInpLabel>Your password</StyledSignInFormInpLabel>
            <StyledSignInFormInp1
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></StyledSignInFormInp1>
          </StyledSignInFormInp2>
          <StyledSignInSBtn>
            <StyledSignInBtn type="submit">Sign In</StyledSignInBtn>
            <StyledSignInSBtnP>
              Already signed up?{" "}
              <StyledSignInSBtnSpan href="/signup/user">
                Go to sign up.
              </StyledSignInSBtnSpan>
            </StyledSignInSBtnP>
          </StyledSignInSBtn>
        </StyledSignInForm>

      </StyledSignInDiv>
    </StyledSignInContainer>
  );
}
