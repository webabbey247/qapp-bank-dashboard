import React, {useState} from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarNavigationContainer,
  SidebarNavChild,
  SidebarNavWithChild,
  SidebarNavWithChildTop,
  SidebarNavChildDropdown,
  SidebarNavChildrenWrapper,
  SidebarNavChildren,
  SidebarFooter,
  SidebarNavChildIcon,
  SidebarNavChildText,
  SidebarFooterTop,
  SidebarFooterBtn,
  SidebarFooterBottomText,
} from "./SidebarCss";

import {
  dashboardIcon,
  serviceIcon,
  customerIcon,
  employeeIcon,
  agentIcon,
  settingIcon,
  menuDropdownIcon,
} from "assets";

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(toggleMenu);
  return (
    <>
      <SidebarContainer>
        <SidebarWrapper>
          <SidebarNavigationContainer>
            <SidebarNavChild>
              <SidebarNavChildIcon src={dashboardIcon} alt='Dashboard' />
              <SidebarNavChildText>Dashboard</SidebarNavChildText>
            </SidebarNavChild>

            <SidebarNavWithChild>
              <SidebarNavWithChildTop
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <SidebarNavChildIcon src={serviceIcon} alt='Services' />
                <SidebarNavChildText>Services</SidebarNavChildText>
                <SidebarNavChildDropdown src={menuDropdownIcon} />
              </SidebarNavWithChildTop>
              {toggleMenu ? (
                <SidebarNavChildrenWrapper>
                  <SidebarNavChildren>Deposit</SidebarNavChildren>
                  <SidebarNavChildren>Withdrawal</SidebarNavChildren>
                  <SidebarNavChildren>Transfer</SidebarNavChildren>
                  <SidebarNavChildren>Loan</SidebarNavChildren>
                  <SidebarNavChildren>Utility</SidebarNavChildren>
                </SidebarNavChildrenWrapper>
              ) : (
                ""
              )}
            </SidebarNavWithChild>

            <SidebarNavWithChild>
              <SidebarNavWithChildTop>
                <SidebarNavChildIcon src={customerIcon} alt='Customers' />
                <SidebarNavChildText>Customers</SidebarNavChildText>
                <SidebarNavChildDropdown src={menuDropdownIcon} />
              </SidebarNavWithChildTop>
              <SidebarNavChildrenWrapper>
                <SidebarNavChildren>Active List</SidebarNavChildren>
                <SidebarNavChildren>Inactive List</SidebarNavChildren>
              </SidebarNavChildrenWrapper>
            </SidebarNavWithChild>

            <SidebarNavWithChild>
              <SidebarNavWithChildTop>
                <SidebarNavChildIcon src={employeeIcon} alt='Employees' />
                <SidebarNavChildText>Employees</SidebarNavChildText>
                <SidebarNavChildDropdown src={menuDropdownIcon} />
              </SidebarNavWithChildTop>
              <SidebarNavChildrenWrapper>
                <SidebarNavChildren>Active List</SidebarNavChildren>
                <SidebarNavChildren>Inactive List</SidebarNavChildren>
              </SidebarNavChildrenWrapper>
            </SidebarNavWithChild>

            <SidebarNavWithChild>
              <SidebarNavWithChildTop>
                <SidebarNavChildIcon src={agentIcon} alt='Agents' />
                <SidebarNavChildText>Agents</SidebarNavChildText>
                <SidebarNavChildDropdown src={menuDropdownIcon} />
              </SidebarNavWithChildTop>
              <SidebarNavChildrenWrapper>
                <SidebarNavChildren>Active List</SidebarNavChildren>
                <SidebarNavChildren>Inactive List</SidebarNavChildren>
              </SidebarNavChildrenWrapper>
            </SidebarNavWithChild>

            <SidebarNavChild>
              <SidebarNavChildIcon src={settingIcon} alt='Settings' />
              <SidebarNavChildText>Settings</SidebarNavChildText>
            </SidebarNavChild>
          </SidebarNavigationContainer>

          <SidebarFooter>
            <SidebarFooterTop>
              <SidebarFooterBtn>Logout</SidebarFooterBtn>
              <SidebarFooterBtn>Support</SidebarFooterBtn>
            </SidebarFooterTop>
            <SidebarFooterBottomText>v 1.0.0</SidebarFooterBottomText>
          </SidebarFooter>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
