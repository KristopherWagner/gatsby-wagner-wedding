import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

export default function Accommodations() {
  return (
    <>
      <h3>Accommodations</h3>
      <p>
        While we will be staying at the Grand Floridian Resort and Villas for the length of our
        stay, you have a multitude of options across the Walt Disney World Resort as well as
        off-property options. For ease of transportation, we recommend staying at one of the
        <Link
          href="https://disneyworld.disney.go.com/faq/resorts/resort-hotel-list/"
          text=" 31 resort options "
        />
        within the Walt Disney World Resort.
      </p>
      <Grid>
        <div>
          <h4>Book directly through WDW</h4>
          <p>
            <Link
              href="https://disneyworld.disney.go.com/resorts/"
              text="Resort Hotels"
            />
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
              text={' David\'s Vacation Club Rentals '}
            />
            Access to 12 Walt Disney World resorts at a lower cost than booking directly
            through Walt Disney World. Booking requests can be submitted up to 11-months
            in advance, but booking is not guaranteed when the request is submitted.
          </p>
        </div>
      </Grid>
    </>
  );
}
