import React from 'react';

// import { Dashboard } from '../../../components/LayoutIcons';
import Menu from './Menu';
import { Container } from './styles';

const GlobalAside = () => {
  const dataMenu = [
    { name: 'Páginas', icon: 'DashboardPages' },
    { name: 'Posts', icon: 'Posts' },
  ];

  return (
    <Container>
      <Menu dataMenu={dataMenu} />
    </Container>
  );
};

export default GlobalAside;
