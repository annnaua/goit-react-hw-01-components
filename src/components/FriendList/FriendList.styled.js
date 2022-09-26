import styled from 'styled-components';

export const FriendWrapper = styled.ul`
  list-style: none;

  box-sizing: border-box;
  overflow: hidden;

  width: fit-content;
  border: 1px solid ${p => p.theme.background.black};
  border-radius: 4px;

  margin: 0 auto;
  margin-top: 40px;

  display: flex;
  align-items: center;
  gap: 32px;

  background-color: ${p => p.theme.background.white};
  padding: 16px;
`;
