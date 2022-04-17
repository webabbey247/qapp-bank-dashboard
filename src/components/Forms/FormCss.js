import styled from "styled-components";

export const SearchFormWrapper = styled.form`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

export const SearchFormInput = styled.input`
  background-color: #366a80;
  border: 1px solid #366a80;
  height: 35px;
  padding: 0 16px;
  width: 100%;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;

  &.invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 22.4px;
    color: var(--input-text-color);
    opacity: 0.6;
  }

  &:focus {
    color: #366a80;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    outline: 0;
    box-shadow: none !important;
  }
`;

export const SearchFormInputBtn = styled.button`
  cursor: pointer;
  border: 1px solid #366a80;
  background: #366a80;
  height: 35px;
  text-align: center;
  font-size: 20px;
  padding-top: 5px;
  color: #ffffff;
  width: 50px;
  font-weight: 400;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
