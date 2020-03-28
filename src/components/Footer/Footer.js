import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 0vh;
  text-align: center;
  background: #ffffff;
  line-height: 70px;
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 0.4px;
  @media (max-width: 959px) {
    height: 50px;
    line-height: 50px;
    background: #ffffff;
  }
`;

function Footer() {
  return <FooterContainer></FooterContainer>;
}

export default Footer;
