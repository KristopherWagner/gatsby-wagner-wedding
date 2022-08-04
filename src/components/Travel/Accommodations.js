import React from 'react';

import Grid from './Grid';
import Link from './Link';

export default function Accommodations() {
  return (
    <>
      <h4>Accommodations</h4>
      <p className="body1">
        While we will be staying at the Grand Floridian Resort and Villas for the length of our
        stay, you have a multitude of options across the Walt Disney World Resort as well as
        off-property options. For ease of transportation, we recommend staying at one of the
        {' '}
        <Link
          href="https://disneyworld.disney.go.com/faq/resorts/resort-hotel-list/"
          text="31 resort options"
        />
        {' within the Walt Disney World Resort.'}
      </p>
      <Grid>
        <div>
          <h5>Book directly through WDW</h5>
          <p className="subtitle1">
            <Link
              href="https://disneyworld.disney.go.com/resorts/"
              text="Resort Hotels"
            />
          </p>
          <p className="body1">
            This option allows you to review all 31 resort options available and book directly.
            Prices may fluctuate depending on seasonality and sales
          </p>
        </div>
        <div>
          <h5>Book using a Travel Agent</h5>
          <p className="body1">
            Free service that handles all of your vacation planning in one spot (hotel,
            park tickets, dining reservations, etc.) Easy, hands-off booking process
          </p>
        </div>
        <div>
          <h5>Purchase DVC rental points</h5>
          <p className="body1">
            <Link
              href="https://dvcrequest.com/"
              text="David's Vacation Club Rentals"
            />
          </p>
          <p className="body1">
            Access to 12 Walt Disney World resorts at a lower cost than booking directly
            through Walt Disney World. Booking requests can be submitted up to 11-months
            in advance, but booking is not guaranteed when the request is submitted.
          </p>
        </div>
      </Grid>
    </>
  );
}
