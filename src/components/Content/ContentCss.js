import styled from "styled-components";
import {SiteContainer} from "GlobalCss";

export const ContentContainer = styled.div`
  flex: 0 0 80%;
  max-width: 80%;
`;

export const ContentWrapper = styled(SiteContainer)`
  padding: 0 0.5rem;
`;

export const ContentRow = styled.div`
  display: flex;
  flexwrap: wrap;
 margin-left: auto;
 margin-right: auto;
    flex: 1;
  }
`;

export const ContentColumn = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

export const TopRowCard = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.13);
  margin-bottom: 1rem;
  height: 117px;
`;

export const TopRowCardTopContent = styled.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0.143) -87.84%,
    rgba(255, 255, 255, 0.055) 100%
  );
  border-radius: 10px 10px 0 0;
  padding: 1rem 1rem 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TopRowCardTopContentLTR = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopRowCardTopContentLTRHeading = styled.h2`
  font-weight: 400;
  font-size: 36px;
  line-height: 25px;
  text-align: right;
  color: #ffffff;
  display: flex;

  & > svg {
    font-size: 36px;
    margin-top: -5px;
  }
`;

export const TopRowCardTopContentLTRText = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 5px 0;
`;

export const TopRowCardTopContentRTL = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopRowCardTopContentRTLTop = styled.div`
  background: #123d4a;
  border-radius: 4px 4px 0px 0px;
  padding: 0.4rem 1rem;
  margin-bottom: 2px;
`;

export const TopRowCardTopContentRTLTopText = styled.p`
  font-weight: 500;
  font-size: 7px;
  line-height: 10px;
  color: var(--success);
  text-align: center;
`;

export const TopRowCardTopContentRTLBottom = styled.div`
  padding: 0.4rem 1rem;
  background: #123d4a;
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 2px;
`;
export const TopRowCardTopContentRTLBottomText = styled.p`
  font-weight: 500;
  font-size: 7px;
  line-height: 10px;
  color: var(--danger);
  text-align: center;
`;

export const TopRowCardBottomContent = styled.div`
  background: rgba(41, 116, 140, 0.4);
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
`;

export const TopRowCardBottomContentText = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: var(--white);
  margin-right: 5px;
  display: flex;

  & > svg {
    width: 3px;
    height: 3px;
    margin-right: 10px;
    color: ${(props) => props.color || "var(--white)"};
  }
`;

export const BottomRowCard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0.143) -87.84%,
    rgba(255, 255, 255, 0.055) 100%
  );
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: space-between;
  height: 117px;
`;

export const BottomRowCardLTR = styled.div`
  diplay: flex;
  justify-content: space-between;
`;

export const BottomRowCardLTRHeading = styled.h4`
  font-weight: 500;
  font-size: 19px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #bdf0ec;
`;
export const BottomRowCardLTRText = styled.p`
  font-weight: 400;
  font-size: 10px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-top: 8px;
`;

export const BottomRowCardRTLText = styled.p`
  font-weight: 500;
  font-size: 11px;
  line-height: 0;
  color: #ffffff;
  margin-top: 5px;
`;

export const ContentFullColumn = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
  margin: 1rem 0;
`;

export const ContentAnalyticWrapper = styled.div`
  width: min(100%, 69rem);
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;

export const ContentAnalytic = styled.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0.143) -87.84%,
    rgba(255, 255, 255, 0.055) 100%
  );
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.29);
  border-radius: 10px;
  height: 370px;
`;
