import { useGlobalContext } from "../../context";
import { SignUpImg1, SignUpImg2 } from "../../components/export_img";
import { useNavigate } from "react-router-dom";
import {
  StyledSignUpBtn,
  StyledSignUpContainer,
  StyledSignUpDisting,
  StyledSignUpDistinghr1,
  StyledSignUpDistingtext,
  StyledSignUpDiv,
  StyledSignUpForm,
  StyledSignUpFormInp,
  StyledSignUpFormInp1,
  StyledSignUpFormInp2,
  StyledSignUpFormInpLabel,
  StyledSignUpFrame1,
  StyledSignUpFrame11,
  StyledSignUpFrame12,
  StyledSignUpFrame1Text,
  StyledSignUpH1,
  StyledSignUpSBtn,
  StyledSignUpSBtnP,
  StyledSignUpSBtnSpan,
} from "../../components/Styled";

export default function SignUp() {
  const navigate = useNavigate();
  const { login, password, setPassword,name, setName, email, setEmail  } = useGlobalContext();
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
          <StyledSignUpForm onSubmit={login}>
            <StyledSignUpFormInp>
              <StyledSignUpFormInpLabel>Your username</StyledSignUpFormInpLabel>
              <StyledSignUpFormInp1
                placeholder="Enter your username"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></StyledSignUpFormInp1>
            </StyledSignUpFormInp>
            <StyledSignUpFormInp2>
              <StyledSignUpFormInpLabel>Your Email</StyledSignUpFormInpLabel>
              <StyledSignUpFormInp1
                type="email"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></StyledSignUpFormInp1>
            </StyledSignUpFormInp2>
            <StyledSignUpFormInp2>
              <StyledSignUpFormInpLabel>Your Password</StyledSignUpFormInpLabel>
              <StyledSignUpFormInp1
                type="password"
                placeholder="Enter your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></StyledSignUpFormInp1>
            </StyledSignUpFormInp2>
            <StyledSignUpSBtn>
              <StyledSignUpBtn>Send</StyledSignUpBtn>
              <StyledSignUpSBtnP>
                Already signed up?{" "}
                <StyledSignUpSBtnSpan href="/signin/user">
                  Go to sign in.
                </StyledSignUpSBtnSpan>
              </StyledSignUpSBtnP>
            </StyledSignUpSBtn>
          </StyledSignUpForm>
        </StyledSignUpDiv>
      </StyledSignUpContainer>
    </>
  );
}
