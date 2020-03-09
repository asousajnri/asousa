import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  ListPagesSearchLegend,
  ListPagesSearchRow,
  Column,
  ListPagesSearchRows,
} from './styles';

const ListPagesSearch = () => (
  <Container>
    <ListPagesSearchLegend>
      <Column columnWidth="10">ID</Column>
      <Column columnWidth="30">Nome</Column>
      <Column columnWidth="30">Data de publicação</Column>
      <Column columnWidth="30">Data de Atualização</Column>
    </ListPagesSearchLegend>
    <ListPagesSearchRows>
      <Link to="/dashboard/paginas/home">
        <ListPagesSearchRow>
          <Column columnWidth="10" fontLight>
            001
          </Column>
          <Column columnWidth="30" fontLight>
            Home
          </Column>
          <Column columnWidth="30" fontLight>
            09/03/2019
          </Column>
          <Column columnWidth="30" fontLight>
            10/03/2019
          </Column>
        </ListPagesSearchRow>
      </Link>
      <Link to="/dashboard/paginas/home">
        <ListPagesSearchRow>
          <Column columnWidth="10" fontLight>
            002
          </Column>
          <Column columnWidth="30" fontLight>
            Meu Dashboard
          </Column>
          <Column columnWidth="30" fontLight>
            09/03/2019
          </Column>
          <Column columnWidth="30" fontLight>
            12/03/2019
          </Column>
        </ListPagesSearchRow>
      </Link>
    </ListPagesSearchRows>
  </Container>
);

export default ListPagesSearch;
