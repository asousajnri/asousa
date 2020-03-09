import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #000;
    text-decoration: none;
    border-bottom: 1px dashed #ccc;

    &:hover {
      background: #e8e8e8;
    }

    &:last-child {
      border-bottom: transparent;
    }
  }
`;

export const ListPagesSearchLegend = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 2rem 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 2rem;
  font-weight: ${props => (props.fontLight ? '400' : '900')};

  width: ${props => `${props.columnWidth}%`};
`;

export const ListPagesSearchRows = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListPagesSearchRow = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 3rem;
`;
