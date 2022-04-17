import React from "react";
import styled from "styled-components";

import {Header, Sidebar, Content} from "components";

export const SectionDivider = styled.div`
  width: 100%;
  height: 50px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  max-width: 100%;
  min-width: 0;
`;

const Homepage = () => {
  return (
    <>
      <Header />
      <SectionDivider />
      <SectionWrapper>
        <Sidebar />
        <Content />
      </SectionWrapper>
    </>
  );
};

export default Homepage;
