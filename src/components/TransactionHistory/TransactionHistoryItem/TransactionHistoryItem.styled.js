import styled from 'styled-components';

export const TransactionItem = styled.tr`
  font-weight: 400;
  font-size: 0.85rem;

  color: ${p => p.theme.colors.black};

  :nth-child(odd) {
    background-color: ${p => p.theme.background.white};
  }
  :nth-child(even) {
    background-color: ${p => p.theme.background.greyDark};
  }
`;
