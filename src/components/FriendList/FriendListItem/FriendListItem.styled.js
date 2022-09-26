import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FriendImage = styled.img`
  display: block;

  width: 50px;
  height: 50px;
`;

export const FriendTitle = styled.p`
  font-weight: 500;
  font-size: 1rem;

  color: ${p => p.theme.colors.dark};
`;

export const FriendStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${p => {
    return p.selected ? p.theme.status.green : p.theme.status.red;
  }};
`;
