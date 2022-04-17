import styled from "styled-components";

export const HeaderWrapper = styled.header`
  margin: 0;
  padding: 0;
  max-width: 100%;
  top: 0px;
  position: sticky;
  z-index: 1020;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  height: 65px;
`;

export const NavLogoContainer = styled.div`
  width: 20%;
  background: var(--background-opacity);
  border: 1px solid var(--border-opacity);
  backdrop-filter: blur(24px);
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-left: none;
  border-right: none;
  border-top: none;
`;

export const NavLogo = styled.img`
  margin: 0;
  padding: 0;
  height: 35px;
  width: 160px;
  margin-top: 3px;
`;

export const NavMenuIcon = styled.span`
  font-size: 30px;
  color: var(--white);
  margin-top: 3px;
`;

export const NavSearchContainer = styled.div`
  width: 45%;
  background: var(--linear-gradient-bg);
  border: 1px solid var(--border-opacity);
  backdrop-filter: blur(24px);
  padding: 0.8rem 2.5rem;
  border-right: none;
  border-top: none;
`;

export const NavNotificationContainer = styled.div`
  width: 6%;
  background: var(--linear-gradient-bg);
  border: 1px solid var(--border-opacity);
  backdrop-filter: blur(24px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: none;
  border-top: none;
`;

export const NavNotificationWrapper = styled.div`
  background: var(--linear-gradient-bg-3);
  border-radius: 7px;
  width: 38px;
  height: 35px;
`;

export const NavNotificationIcon = styled.img`
  width: 22px;
  height: 22px;
  margin: 6px auto;
  display: block;
`;

export const NavProfileContainer = styled.div`
  width: 14%;
  background: var(--linear-gradient-bg);
  border: 1px solid var(--border-opacity);
  backdrop-filter: blur(24px);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-right: none;
  border-top: none;
`;

export const NavProfileLTR = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

export const NavProfileLTRHeading = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  text-align: right;
  color: var(--white);
  margin-top: -7px;
  text-transform: capitalize;
`;

export const NavProfileLTRText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 25px;
  text-align: right;
  color: var(--deep-gray);
  margin-top: -5px;
`;

export const NavProfileRTL = styled.div`
  background: var(--sea-serpent);
  border: 2px solid var(--sea-serpent);
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border-radius: 100px;
  margin-top: -8px;
`;

export const NavProfileImg = styled.img`
  width: 42px;
  height: 43px;
  border-radius: 100px;
`;

export const NavLanguageContainer = styled.div`
  width: 9%;
  background: var(--linear-gradient-bg);
  border: 1px solid var(--border-opacity);
  backdrop-filter: blur(24px);
  padding: 1rem;
  display: flex;
  justify-content: center;
  border-right: none;
  border-top: none;
`;

export const NavLanguageText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  color: var(--white);
  margin-top: 0.1rem;
`;
export const NavLanguageIcon = styled.span`
  font-size: 18px;
  color: var(--white);
  margin-left: 0.4rem;
  margin-top: 0.3rem;
`;

export const NavLanguageDropdownIcon = styled.span`
  font-size: 18px;
  color: var(--white);
  margin-left: 0.3rem;
  margin-top: 0.3rem;
`;
