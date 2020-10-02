import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  padding: 0 32px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: var(--text-color);
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 16px;
  display: flex;
  align-items: center;
  margin: 32px 8px 32px 0;

  div {
    display: flex;
    align-items: center;
    flex: 1;
    background: var(--shape);

    border-radius: 10px;

    input {
      height: 60px;
      flex: 1;
      background: none;
      border: 0;
      padding: 16px;
      color: var(--text-color);
    }

    svg {
      margin-right: 16px;
    }
  }
  button {
    height: 60px;
    width: 200px;
    background: var(--primary-color);
    border: 0;
    border-radius: 10px;
    margin-left: 16px;
    transition: background 0.2s;

    &:hover {
      background: var(--primary-hover);
    }
  }

  select {
    width: 130px;
    height: 60px;
    background: var(--primary-color);

    border: 0;
    border-radius: 10px;
    margin-left: 16px;

    font-size: 16px;
    color: #fff;

    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: 0;
  gap: 16px;

  margin-bottom: 32px;
`;

export const Card = styled.a`
  background: #1f211f;
  border-radius: 10px;
  width: 200px;
  padding-bottom: 8px;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }

  p {
    font-size: 12px;
    color: #999;
    padding: 4px 8px;
  }

  h3 {
    color: var(--text-color);
    font-size: 20px;
    padding: 4px 8px;
  }

  ul {
    list-style: none;
    display: flex;

    padding: 0 8px;
    li {
      background: #fff;
      text-align: center;
      color: black;
      width: 75px;
      border-radius: 4px;

      & + li {
        margin-left: 8px;
      }
    }
  }
`;
