import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  place-items: center;
`;

export const Grid = styled.div`
  min-width: 1000px;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 14px;

  & > span {
    padding: 8px 4px;
    margin-top: 8px;
    background-color: white;

    &:nth-child(-n + 4) {
      background-color: #007acc;
      color: white;
    }
  }
`;

export const Box = styled.div`
  margin: 4px;
`;

export const Span = styled.span``;

export const Input = styled.input`
  margin-left: 4px;
  border-radius: 4px;
  border: none;
`;

export const Title = styled.h1`
  font-size: 16px;
`;
