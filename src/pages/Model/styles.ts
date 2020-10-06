import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 32px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: var(--text-color);
    transition: color 0.2s;

    &:hover {
      color: #999;
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: var(--text-color);
  display: flex;
  align-items: center;

  a {
    &:hover {
      color: var(--text-color);
    }

    svg {
      margin-right: 0;
    }
  }
`;
