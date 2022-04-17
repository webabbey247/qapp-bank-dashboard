import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0.143) -87.84%,
    rgba(255, 255, 255, 0.055) 100%
  );
  border: 1px solid rgba(234, 234, 234, 0.5);
  border-left: none;
  border-bottom: none;
  backdrop-filter: blur(24px);
  border-radius: 10px;
  border-bottom-right-radius: 0;
  border-top-left-radius: 0;
  position: sticky;
  top: 0;
`;

export const SidebarWrapper = styled.div`
  position: absolute;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 10;
  left: 0;
`;

export const SidebarNavigationContainer = styled.div`
  flex: 1 1 auto;
  overscroll-behavior: contain;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  touch-action: auto;
  overflow-anchor: none;
`;

export const SidebarNavChild = styled.a`
  display: flex;
  justify-content: flex-start;
  border-left: 5px solid red;
  text-decoration: none;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

export const SidebarNavChildIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export const SidebarNavChildText = styled.p`
  font-weight: 600;
  font-size: 13.8701px;
  line-height: 21px;
  color: #fefeff;
  margin: 0 30px;
  width: 50px;
`;

export const SidebarNavChildDropdown = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 60px;
  transform: ${(p) => (p.toggleMenu = true ? "" : "rotate(-90deg)")};
`;

export const SidebarNavWithChild = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const SidebarNavWithChildTop = styled.div`
  display: flex;
  justify-content: flex-start;
  border-left: 5px solid red;
`;

export const SidebarNavChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
`;

export const SidebarNavChildren = styled.a`
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #bdf0ec;
  margin-top: 0.4rem;
`;

export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 1rem;
  border-top: 1px solid #b9b9b9;
`;

export const SidebarFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 0.4rem;
`;

export const SidebarFooterBtn = styled.button`
  padding: 0.6rem 2rem;
  background: #5eaaa8;
  border-radius: 62px;
  border: 1px solid #5eaaa8;
  font-weight: 500;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  color: #032130;
`;

export const SidebarFooterBottomText = styled.div`
  text-align: center;
  margin-top: 0.8rem;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ced7da;
`;
