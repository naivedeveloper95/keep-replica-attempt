import React from "react";
import { Card, Icon } from "../../UI/theme";
import {
  SocialsContainer,
  // FacebookBtn,
  GoogleBtn,
  FormHeader,
} from "./common-elements";
import {
  signInWithGoogle,
  // signInWithFacebook
} from "../../firebase/firebaseAuth";

function SocialsAuth() {
  return (
    <Card>
      <FormHeader>Continue with your Google Account!</FormHeader>
      {/* <SocialsContainer>
        <FacebookBtn onClick={signInWithFacebook}>
          Sing in with <Icon className="fab fa-facebook-square" />
        </FacebookBtn>
      </SocialsContainer> */}
      <SocialsContainer>
        <GoogleBtn onClick={signInWithGoogle}>
          Sign in with <Icon className="fab fa-google" />
        </GoogleBtn>
      </SocialsContainer>
    </Card>
  );
}

export default SocialsAuth;
