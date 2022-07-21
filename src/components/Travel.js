import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import { BACKGROUND_LIGHT, NORWAY, PRIMARY } from './Colors';

const Root = styled.div`
    background-color: ${NORWAY};
    padding: 24px;
    text-align: center;
`;

const Link = styled.a`
    color: ${BACKGROUND_LIGHT};
    text-decoration: none;

    &:hover {
        color: ${PRIMARY};
    }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

export default function Travel() {
  return (
    <Root id="travel">
      <Card icon="fa-duotone fa-ticket-airline">
        <h2>Travel and Accommodations</h2>
        <p>
          Our entire wedding will be contained within the Walt Disney World Resort.
          We highly recommend you fly into the Orlando International Airport (MCO)
          and stay on-property at any of the numerous Walt Disney.
        </p>
        <h3>Travel</h3>
        <p>
          For our out of town guests, the Orlando International Airport (MCO) is the closest airport
          and provides several transportation options to the Walt Disney World Resort. Other
          airports include the Orlando Sanford International Airport (SFB) and Tampa International
          Airport (TPA), however these are further away and will require a rental car or taxi.
        </p>
        <p>
          If you choose to fly into the Orlando International Airport and are staying at a
          WDW Resort hotel, you can choose to book transportation direct to your hotel through
          <Link
            href="https://www.mearsconnect.com/?AspxAutoDetectCookieSupport=1"
            rel="noreferrer"
            target="_blank"
          >
            {' Mears Connect '}
          </Link>
          or
          <Link
            href="https://sunshineflyer.com/?gclid=CjwKCAjwrNmWBhA4EiwAHbjEQIiT6zREtLgWfB-D2zHofMaAqNLMC3_6_5L-XpLcFISs9Cc1YhlJGBoC8ogQAvD_BwE"
            rel="noreferrer"
            target="_blank"
          >
            {' The Sunshine Flyer'}
          </Link>
          .
        </p>
        <h3>Accommodations</h3>
        <p>
          While we will be staying at the Grand Floridian Resort and Villas for the length of our
          stay, you have a multitude of options across the Walt Disney World Resort as well as
          off-property options. For ease of transportation, we recommend staying at one of the
          <Link
            href="https://disneyworld.disney.go.com/faq/resorts/resort-hotel-list/"
            rel="noreferrer"
            target="_blank"
          >
            {' 31 resort options '}
          </Link>
          within the Walt Disney World Resort.
        </p>
        <Grid>
          <div>
            <h4>Book directly through WDW</h4>
            <p>
              <Link
                href="https://disneyworld.disney.go.com/resorts/"
                rel="noreferrer"
                target="_blank"
              >
                Resort Hotels
              </Link>
            </p>
            <p>
              This option allows you to review all 31 resort options available and book directly.
              Prices may fluctuate depending on seasonality and sales
            </p>
          </div>
          <div>
            <h4>Book using a Travel Agent</h4>
            <p>
              Free service that handles all of your vacation planning in one spot (hotel,
              park tickets, dining reservations, etc.) Easy, hands-off booking process
            </p>
          </div>
          <div>
            <h4>Purchase DVC rental points</h4>
            <p>
              Recommended Site:
              <Link
                href="https://dvcrequest.com/"
                rel="noreferrer"
                target="_blank"
              >
                {' David\'s Vacation Club Rentals '}
              </Link>
              Access to 12 Walt Disney World resorts at a lower cost than booking directly
              through Walt Disney World. Booking requests can be submitted up to 11-months
              in advance, but booking is not guaranteed when the request is submitted.
            </p>
          </div>
        </Grid>
      </Card>
    </Root>
  );
}
