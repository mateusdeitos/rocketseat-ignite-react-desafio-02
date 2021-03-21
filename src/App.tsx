import React, { useContext, useEffect, useState } from 'react';

import { Button } from './components/Button';

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { Container } from './components/Container';

export function App() {
  return (
    <Container>
      <SideBar />
      <Content />
    </Container>
  )
}