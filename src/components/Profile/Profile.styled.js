import styled from 'styled-components';

export const ProfileCard = styled.div`
  box-sizing: border-box;
  overflow: hidden;

  width: 275px;
  border-radius: 4px;

  margin: 40px auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  background-color: ${p => p.theme.background.black};
  color: ${p => p.theme.colors.white};
`;

export const Avatar = styled.img`
  width: 40%;
  border-radius: 50%;
`;

export const DescriptionTitle = styled.p`
  margin: 0.85em 0px;
  font-weight: 500;
  font-size: 1.5rem;
`;

export const DescriptionText = styled.p`
  margin: 0.25em 0px;
  font-weight: 400;
  font-size: 1rem;

  color: ${p => p.theme.colors.grey};
`;

export const StastList = styled.ul`
  padding: 0;
  margin: 0;

  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  padding: 20px;
  background-color: ${p => p.theme.background.dark};
`;

export const StastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StatsTitle = styled.span`
  font-weight: 400;
  font-size: 0.85rem;

  color: ${p => p.theme.colors.grey};
`;

export const StatsText = styled.span`
  font-weight: 400;
  font-size: 1rem;
  font-weight: 500;

  color: ${p => p.theme.colors.white};
`;
