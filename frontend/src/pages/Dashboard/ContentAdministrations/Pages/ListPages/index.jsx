import React from 'react';
import { Link } from 'react-router-dom';

import * as LayoutIcons from '../../../../../components/LayoutIcons';
import Title from '../../Title';
import {
  Container,
  ToolBar,
  WrapperIcon,
  SearchPages,
  Input,
  ButtonSearch,
} from './styles';

const ListPages = () => (
  <Container>
    <Title>
      <h2>Páginas</h2>

      <ToolBar>
        <li>
          <WrapperIcon>
            <LayoutIcons.GoBack fill="#000" />
          </WrapperIcon>

          <Link to="/dashboard">Voltar</Link>
        </li>

        <li>
          <WrapperIcon>
            <LayoutIcons.CreateNew fill="#000" />
          </WrapperIcon>

          <Link to="/dashboard/nova-pagina">Nova página</Link>
        </li>
      </ToolBar>
    </Title>

    <SearchPages>
      <Input type="text" name="input-search" placeholder="Buscar..." />
      <ButtonSearch>
        <LayoutIcons.Search fill="#000" />
      </ButtonSearch>
    </SearchPages>
  </Container>
);

export default ListPages;
