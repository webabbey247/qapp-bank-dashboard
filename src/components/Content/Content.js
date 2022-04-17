import React from "react";

import {
  ContentContainer,
  ContentWrapper,
  ContentRow,
  ContentColumn,
  TopRowCard,
  TopRowCardTopContent,
  TopRowCardTopContentLTR,
  TopRowCardTopContentLTRHeading,
  TopRowCardTopContentLTRText,
  TopRowCardTopContentRTL,
  TopRowCardTopContentRTLTop,
  TopRowCardTopContentRTLTopText,
  TopRowCardTopContentRTLBottom,
  TopRowCardTopContentRTLBottomText,
  TopRowCardBottomContent,
  TopRowCardBottomContentText,
  BottomRowCard,
  BottomRowCardLTR,
  BottomRowCardLTRHeading,
  BottomRowCardLTRText,
  BottomRowCardRTLText,
  ContentFullColumn,
  ContentAnalytic,
} from "./ContentCss";

import {FiArrowUp, FiArrowDown} from "react-icons/fi";

const Content = () => {
  return (
    <>
      <ContentContainer>
        <ContentWrapper>
          <ContentRow>
            <ContentColumn>
              <TopRowCard>
                <TopRowCardTopContent>
                  <TopRowCardTopContentLTR>
                    <TopRowCardTopContentLTRHeading>
                      352 <FiArrowUp />
                    </TopRowCardTopContentLTRHeading>
                    <TopRowCardTopContentLTRText>
                      Total Customers
                    </TopRowCardTopContentLTRText>
                  </TopRowCardTopContentLTR>
                  <TopRowCardTopContentRTL>
                    <TopRowCardTopContentRTLTop>
                      <TopRowCardTopContentRTLTopText>
                        249 Active
                      </TopRowCardTopContentRTLTopText>
                    </TopRowCardTopContentRTLTop>
                    <TopRowCardTopContentRTLBottom>
                      <TopRowCardTopContentRTLBottomText>
                        105 Inactive
                      </TopRowCardTopContentRTLBottomText>
                    </TopRowCardTopContentRTLBottom>
                  </TopRowCardTopContentRTL>
                </TopRowCardTopContent>
                <TopRowCardBottomContent>
                  <TopRowCardBottomContentText>
                    105%
                  </TopRowCardBottomContentText>
                  <FiArrowUp color='var(--success)' />
                  <FiArrowDown color='var(--danger)' />
                </TopRowCardBottomContent>
              </TopRowCard>
            </ContentColumn>

            <ContentColumn>
              <TopRowCard>
                <TopRowCardTopContent>
                  <TopRowCardTopContentLTR>
                    <TopRowCardTopContentLTRHeading>
                      352 <FiArrowUp />
                    </TopRowCardTopContentLTRHeading>
                    <TopRowCardTopContentLTRText>
                      Total Accounts
                    </TopRowCardTopContentLTRText>
                  </TopRowCardTopContentLTR>
                  <TopRowCardTopContentRTL>
                    <TopRowCardTopContentRTLTop>
                      <TopRowCardTopContentRTLTopText>
                        249 Active
                      </TopRowCardTopContentRTLTopText>
                    </TopRowCardTopContentRTLTop>
                    <TopRowCardTopContentRTLBottom>
                      <TopRowCardTopContentRTLBottomText>
                        105 Inactive
                      </TopRowCardTopContentRTLBottomText>
                    </TopRowCardTopContentRTLBottom>
                  </TopRowCardTopContentRTL>
                </TopRowCardTopContent>
                <TopRowCardBottomContent>
                  <TopRowCardBottomContentText>
                    105%
                  </TopRowCardBottomContentText>
                  <FiArrowUp color='var(--success)' />
                  <FiArrowDown color='var(--danger)' />
                </TopRowCardBottomContent>
              </TopRowCard>
            </ContentColumn>

            <ContentColumn>
              <TopRowCard>
                <TopRowCardTopContent>
                  <TopRowCardTopContentLTR>
                    <TopRowCardTopContentLTRHeading>
                      352 <FiArrowUp />
                    </TopRowCardTopContentLTRHeading>
                    <TopRowCardTopContentLTRText>
                      Total Agents
                    </TopRowCardTopContentLTRText>
                  </TopRowCardTopContentLTR>
                  <TopRowCardTopContentRTL>
                    <TopRowCardTopContentRTLTop>
                      <TopRowCardTopContentRTLTopText>
                        249 Active
                      </TopRowCardTopContentRTLTopText>
                    </TopRowCardTopContentRTLTop>
                    <TopRowCardTopContentRTLBottom>
                      <TopRowCardTopContentRTLBottomText>
                        105 Inactive
                      </TopRowCardTopContentRTLBottomText>
                    </TopRowCardTopContentRTLBottom>
                  </TopRowCardTopContentRTL>
                </TopRowCardTopContent>
                <TopRowCardBottomContent>
                  <TopRowCardBottomContentText>
                    105%
                  </TopRowCardBottomContentText>
                  <FiArrowUp color='var(--success)' />
                  <FiArrowDown color='var(--danger)' />
                </TopRowCardBottomContent>
              </TopRowCard>
            </ContentColumn>

            <ContentColumn>
              <TopRowCard>
                <TopRowCardTopContent>
                  <TopRowCardTopContentLTR>
                    <TopRowCardTopContentLTRHeading>
                      352 <FiArrowUp />
                    </TopRowCardTopContentLTRHeading>
                    <TopRowCardTopContentLTRText>
                      Total Employees
                    </TopRowCardTopContentLTRText>
                  </TopRowCardTopContentLTR>
                  <TopRowCardTopContentRTL>
                    <TopRowCardTopContentRTLTop>
                      <TopRowCardTopContentRTLTopText>
                        249 Active
                      </TopRowCardTopContentRTLTopText>
                    </TopRowCardTopContentRTLTop>
                    <TopRowCardTopContentRTLBottom>
                      <TopRowCardTopContentRTLBottomText>
                        105 Inactive
                      </TopRowCardTopContentRTLBottomText>
                    </TopRowCardTopContentRTLBottom>
                  </TopRowCardTopContentRTL>
                </TopRowCardTopContent>
                <TopRowCardBottomContent>
                  <TopRowCardBottomContentText>
                    105%
                  </TopRowCardBottomContentText>
                  <FiArrowUp color='var(--success)' />
                  <FiArrowDown color='var(--danger)' />
                </TopRowCardBottomContent>
              </TopRowCard>
            </ContentColumn>
          </ContentRow>

          <ContentRow>
            <ContentColumn>
              <BottomRowCard>
                <BottomRowCardLTR>
                  <BottomRowCardLTRHeading>
                    N430,000,000
                  </BottomRowCardLTRHeading>
                  <BottomRowCardLTRText>Total Deposits</BottomRowCardLTRText>
                </BottomRowCardLTR>
                <BottomRowCardRTLText>+12%</BottomRowCardRTLText>
              </BottomRowCard>
            </ContentColumn>
            <ContentColumn>
              <BottomRowCard>
                <BottomRowCardLTR>
                  <BottomRowCardLTRHeading>
                    N200,000,000
                  </BottomRowCardLTRHeading>
                  <BottomRowCardLTRText>Total Withdrawals</BottomRowCardLTRText>
                </BottomRowCardLTR>
                <BottomRowCardRTLText>+12%</BottomRowCardRTLText>
              </BottomRowCard>
            </ContentColumn>
            <ContentColumn>
              <BottomRowCard>
                <BottomRowCardLTR>
                  <BottomRowCardLTRHeading>
                    N200,000,000
                  </BottomRowCardLTRHeading>
                  <BottomRowCardLTRText>Total Transfers</BottomRowCardLTRText>
                </BottomRowCardLTR>
                <BottomRowCardRTLText>+12%</BottomRowCardRTLText>
              </BottomRowCard>
            </ContentColumn>
            <ContentColumn>
              <BottomRowCard>
                <BottomRowCardLTR>
                  <BottomRowCardLTRHeading>
                    N200,000,000
                  </BottomRowCardLTRHeading>
                  <BottomRowCardLTRText>Total Payment</BottomRowCardLTRText>
                </BottomRowCardLTR>
                <BottomRowCardRTLText>+12%</BottomRowCardRTLText>
              </BottomRowCard>
            </ContentColumn>
          </ContentRow>

          <ContentRow>
            <ContentFullColumn>
              <ContentAnalytic />
            </ContentFullColumn>
          </ContentRow>
        </ContentWrapper>
      </ContentContainer>
    </>
  );
};

export default Content;
