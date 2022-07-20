import React, { useState } from 'react';
import styled from 'styled-components';

import { BACKGROUND_LIGHT, PRIMARY, SECONDARY } from './Colors';

const Button = styled.div`
    background-color: ${(props) => (props.expanded ? 'unset' : PRIMARY)};
    border-radius: 999px;
    box-shadow: ${(props) => (props.expanded ? 'none' : '0px 3px 6px black')};
    cursor: pointer;
    opacity: ${(props) => (props.expanded ? '0.95' : '0.8')};

    position: fixed;
    top: 5px;
    right: 10px;
    z-index: 2;

    transition: 0.5s;
    transition-delay: ${(props) => (props.expanded ? '0.5s' : '0')};
`;

const Icon = styled.i`
  height: 50px;
  width: 50px;

  color: ${BACKGROUND_LIGHT};
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

const Link = styled.a`
  color: ${BACKGROUND_LIGHT};
  display: block;
  font-size: 36px;
  margin-top: 18px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: ${SECONDARY};
  }
`;

const Overlay = styled.div`
  height: 100vh;
  width: ${(props) => (props.expanded ? '100vw' : '0vw')};

  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  background-color: ${PRIMARY};
  opacity: 0.95;
  overflow-x: hidden;
  transition: 0.5s;
  transition-delay: ${(props) => (props.expanded ? '0' : '0.5s')};
`;

const OverlayContent = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
`;

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const icon = expanded ? <Icon className="fa-solid fa-x fa-fw fa-xl" />
    : <Icon className="fa-solid fa-bars fa-fw fa-xl" />;
  const toggle = () => setExpanded(!expanded);
  const closeOverlay = () => setExpanded(false);

  return (
    <>
      <Button
        aria-label={expanded ? 'Close navigation' : 'Open navigation'}
        expanded={expanded}
        onClick={toggle}
        onKeyDown={toggle}
        role="button"
        tabIndex={0}
      >
        {icon}
      </Button>
      <Overlay expanded={expanded}>
        <OverlayContent>
          <Link
            aria-label="Go to event details"
            href="#details"
            onClick={closeOverlay}
          >
            Details
          </Link>
          <Link
            aria-label="Go to COVID guidance"
            href="#covid"
            onClick={closeOverlay}
          >
            COVID-19
          </Link>
        </OverlayContent>
      </Overlay>
    </>
  );
}
