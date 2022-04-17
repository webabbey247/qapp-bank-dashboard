import React from "react";
import {themeDummyLogo, emailIcon, notificationIcon, profileImg} from "assets";
import SearchForm from "components/Forms/SearchForm";
import {BsJustify} from "react-icons/bs";
import {FiGlobe} from "react-icons/fi";
import {FaCaretDown} from "react-icons/fa";

import {
  HeaderWrapper,
  NavContainer,
  NavLogoContainer,
  NavLogo,
  NavMenuIcon,
  NavSearchContainer,
  NavNotificationContainer,
  NavNotificationWrapper,
  NavNotificationIcon,
  NavProfileContainer,
  NavProfileLTR,
  NavProfileLTRHeading,
  NavProfileLTRText,
  NavProfileRTL,
  NavProfileImg,
  NavLanguageContainer,
  NavLanguageText,
  NavLanguageIcon,
  NavLanguageDropdownIcon,
} from "./HeaderCss";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <NavContainer>
          <NavLogoContainer>
            <NavLogo src={themeDummyLogo} alt='Bank Logo' />
            <NavMenuIcon>
              <BsJustify />
            </NavMenuIcon>
          </NavLogoContainer>
          <NavSearchContainer>
            <SearchForm />
          </NavSearchContainer>
          <NavNotificationContainer>
            <NavNotificationWrapper>
              <NavNotificationIcon src={emailIcon} />
            </NavNotificationWrapper>
          </NavNotificationContainer>
          <NavNotificationContainer>
            <NavNotificationWrapper>
              <NavNotificationIcon src={notificationIcon} />
            </NavNotificationWrapper>
          </NavNotificationContainer>
          <NavProfileContainer>
            <NavProfileLTR>
              <NavProfileLTRHeading>Ellem kuti</NavProfileLTRHeading>
              <NavProfileLTRText>Online</NavProfileLTRText>
            </NavProfileLTR>
            <NavProfileRTL>
              <NavProfileImg src={profileImg} />
            </NavProfileRTL>
          </NavProfileContainer>
          <NavLanguageContainer>
            <NavLanguageText>English</NavLanguageText>
            <NavLanguageIcon>
              <FiGlobe />
            </NavLanguageIcon>
            <NavLanguageDropdownIcon>
              <FaCaretDown />
            </NavLanguageDropdownIcon>
          </NavLanguageContainer>
        </NavContainer>
      </HeaderWrapper>
    </>
  );
};

export default Header;
