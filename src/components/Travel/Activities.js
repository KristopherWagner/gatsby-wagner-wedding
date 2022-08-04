import React from 'react';
import styled from 'styled-components';

import Grid from './Grid';
import Link from './Link';

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

// eslint-disable-next-line react/prop-types
function BodyLI({ className, children }) {
  return <li className={`${className} body1`}>{children}</li>;
}

const Bold = styled(BodyLI)`
    font-weight: bold;
`;

export default function Activities() {
  return (
    <>
      <h4>Things to do</h4>
      <p className="body1">
        Here are a few of our favorite things to do while at Walt Disney World;
        you can also reach out to us directly for any recommendations!
      </p>
      <Grid>
        <div>
          <h5 className="cursive">
            <i className="fa-duotone fa-pizza-slice" />
            {'  Eat'}
          </h5>
          <List>
            <Bold>EPCOT</Bold>
            <li className="body2">Teppan Edo</li>
            <li className="body2">International Flower & Garden Festival</li>
          </List>
          <List>
            <Bold>Animal Kingdom</Bold>
            <li className="body2">Satu&apos;li Canteen, Disney&apos;s Animal Kingdom</li>
          </List>
          <List>
            <Bold>Disney Springs</Bold>
            <li className="body2">City Works Eatery & Pour House, Disney Springs</li>
          </List>
        </div>
        <div>
          <h5 className="cursive">
            <i className="fa-duotone fa-beer-mug" />
            {'  Drink'}
          </h5>
          <List>
            <Bold>Disney&apos;s Boardwalk</Bold>
            <li className="body2">
              <Link
                href="https://disneyworld.disney.go.com/entertainment/boardwalk/jellyrolls/"
                text="Jellyrolls"
              />
            </li>
          </List>
          <List>
            <Bold>The Polynesian Village Resort</Bold>
            <li className="body2">
              <Link
                href="https://disneyworld.disney.go.com/dining/polynesian-resort/trader-sams-grog-grotto/"
                text="Trader Sam's Grog Grotto"
              />
            </li>
          </List>
          <List>
            <Bold>Disney Springs</Bold>
            <li className="body2">
              <Link
                href="https://disneyworld.disney.go.com/dining/disney-springs/jock-lindseys-hangar-bar/"
                text="Jock Lindsey's Hangar Bar"
              />
            </li>
            <li className="body2">
              <Link
                href="https://disneyworld.disney.go.com/dining/disney-springs/city-works/"
                text="City Works Eatery & Pour House"
              />
            </li>
          </List>
          <List>
            <Bold>Disney&apos;s Hollywood Studios</Bold>
            <li className="body2">
              <Link
                href="https://disneyworld.disney.go.com/dining/hollywood-studios/ogas-cantina/"
                text="Oga's Cantina"
              />
            </li>
          </List>
          <List>
            <Bold>EPCOT</Bold>
            <li className="body2">
              <Link
                href="https://disneyworld.disney.go.com/events-tours/epcot/epcot-international-flower-and-garden-festival/"
                text="International Flower & Garden Festival"
              />
            </li>
          </List>
        </div>
        <div>
          <h5 className="cursive">
            <i className="fa-duotone fa-roller-coaster" />
            {'  Play'}
          </h5>
          <List>
            <li className="body1">EPCOT</li>
            <li className="body1">The Magic Kingdom</li>
            <li className="body1">Disney&apos;s Hollywood Studios</li>
            <li className="body1">Disney&apos;s Animal Kingdom</li>
            <li className="body1">Typhoon Lagoon</li>
            <li className="body1">Disney Springs</li>
          </List>
        </div>
      </Grid>
    </>
  );
}
