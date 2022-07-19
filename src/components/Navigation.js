import React, { useState } from 'react';
import styled from 'styled-components';

import { BACKGROUND_LIGHT, PRIMARY } from './Colors';

const Container = styled.div`
    background-color: ${PRIMARY};
    border-radius: 999px;
    box-shadow: 0px 3px 6px black;
    opacity: 0.8;

    position: fixed;
    top: 5px;
    right: 10px;
    z-index: 1;
`;

const Icon = styled.i`
  height: 50px;
  width: 50px;

  color: ${BACKGROUND_LIGHT};
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const icon = expanded ? <Icon className="fa-solid fa-x fa-fw fa-xl" />
    : <Icon className="fa-solid fa-bars fa-fw fa-xl" />;
  const toggle = () => setExpanded(!expanded);

  return (
    <Container
      onClick={toggle}
      onKeyDown={toggle}
      role="button"
      tabIndex={0}
    >
      {icon}
    </Container>
  );
}
