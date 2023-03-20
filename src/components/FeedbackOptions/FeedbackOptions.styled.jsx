import styled from 'styled-components';

export const Button = styled.button`
  min-width: 100px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: transparent;
  font-size: 22px;
  text-transform: capitalize;
  :not(:last-child) {
    margin-right: 15px;
  }
  :hover,
  :focus {
    background-color: ${key => {
      switch (key.children) {
        case 'good':
          return 'green';
        case 'neutral':
          return '#f2cd55';
        case 'bad':
          return 'red';
        default:
          return 'transparent';
      }
    }};
    color: white;
  }
`;