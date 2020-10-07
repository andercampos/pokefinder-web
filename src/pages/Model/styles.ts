import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 32px;

  @media (max-width: 750px) {
    padding: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: var(--text-color);

    &:hover {
      color: var(--text-color);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 0;
  outline: none;

  text-decoration: none;
  color: var(--text-color);
  transition: color 0.2s;

  &:hover {
    color: #999;
  }

  svg {
    margin-right: 8px;
  }
`;
