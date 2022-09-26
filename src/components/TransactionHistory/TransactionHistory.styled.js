import styled from 'styled-components';

export const TransactionTable = styled.table`
  box-sizing: border-box;
  overflow: hidden;

  width: 412px;
  padding: 16px;

  border: 1px solid ${p => p.theme.background.black};
  border-radius: 4px;

  color: ${p => p.theme.colors.dark};
  text-align: center;

  margin: 40px auto;
`;

export const TransactionTableHead = styled.thead`
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.background.dark};
`;
