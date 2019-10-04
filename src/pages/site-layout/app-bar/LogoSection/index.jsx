import React from 'react';
import styled from 'styled-components';
import Logo from 'assets/images/icons/icon-72x72.png';

const StyledLogo = styled.img`
  height: 2.7rem;
  padding-right: 0.5rem;
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const index = () => (
  <LogoSection>
    <StyledLogo src={Logo} alt="Young People in Christ" />
    <div>Young People in Christ</div>
  </LogoSection>
);

export default index;
