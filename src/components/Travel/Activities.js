import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import Grid from './Grid';
import Link from './Link';

const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const Bold = styled.li`
    font-weight: bold;
`;

export default function Activities() {
  return (
    <>
      <h3>Things to do</h3>
      <p>
        Here are a few of our favorite things to do while at Walt Disney World;
        you can also reach out to us directly for any recommendations!
      </p>
      <Grid>
        <Card icon="fa-duotone fa-pizza-slice">
          <h4>Eat</h4>
          <List>
            <Bold>EPCOT</Bold>
            <li>Teppan Edo</li>
            <li>International Flower & Garden Festival</li>
          </List>
          <List>
            <Bold>Animal Kingdom</Bold>
            <li>Satu&apos;li Canteen, Disney&apos;s Animal Kingdom</li>
          </List>
          <List>
            <Bold>Disney Springs</Bold>
            <li>City Works Eatery & Pour House, Disney Springs</li>
          </List>
        </Card>
        <Card icon="fa-duotone fa-beer-mug">
          <h4>Drink</h4>
          <List>
            <Bold>Disney&apos;s Boardwalk</Bold>
            <li>
              <Link
                href="https://disneyworld.disney.go.com/entertainment/boardwalk/jellyrolls/"
                text="Jellyrolls"
              />
            </li>
          </List>
          <List>
            <Bold>The Polynesian Village Resort</Bold>
            <li>
              <Link
                href="https://disneyworld.disney.go.com/dining/polynesian-resort/trader-sams-grog-grotto/"
                text="Trader Sam's Grog Grotto"
              />
            </li>
          </List>
          <List>
            <Bold>Disney Springs</Bold>
            <li>
              <Link
                href="https://disneyworld.disney.go.com/dining/disney-springs/jock-lindseys-hangar-bar/"
                text="Jock Lindsey's Hangar Bar"
              />
            </li>
            <li>
              <Link
                href="https://disneyworld.disney.go.com/dining/disney-springs/city-works/"
                text="City Works Eatery & Pour House"
              />
            </li>
          </List>
          <List>
            <Bold>Disney&apos;s Hollywood Studios</Bold>
            <li>
              <Link
                href="https://disneyworld.disney.go.com/dining/hollywood-studios/ogas-cantina/"
                text="Oga's Cantina"
              />
            </li>
          </List>
          <List>
            <Bold>EPCOT</Bold>
            <li>
              <Link
                href="https://disneyworld.disney.go.com/events-tours/epcot/epcot-international-flower-and-garden-festival/"
                text="International Flower & Garden Festival"
              />
            </li>
          </List>
        </Card>
        <Card icon="fa-duotone fa-roller-coaster">
          <h4>Play</h4>
          <List>
            <li>EPCOT</li>
            <li>The Magic Kingdom</li>
            <li>Disney&apos;s Hollywood Studios</li>
            <li>Disney&apos;s Animal Kingdom</li>
            <li>Typhoon Lagoon</li>
            <li>Disney Springs</li>
          </List>
        </Card>
      </Grid>
    </>
  );
}
