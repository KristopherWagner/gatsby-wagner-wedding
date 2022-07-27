import React from 'react';
import styled from 'styled-components';

import Accommodations from './Accommodations';
import Activities from './Activities';
import Card from '../Card';
import { NORWAY, PRIMARY } from '../Colors';
import Link from './Link';
import Grid from './Grid';

const HorizontalRule = styled.hr`
  color: ${PRIMARY};
  margin: 16px auto;
  width: 75%;
`;

const Icon = styled.i`
  color: ${PRIMARY};
`;

const Root = styled.div`
    background-color: ${NORWAY};
    padding: 24px;
    text-align: center;
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
        <Grid columns={2}>
          <div>
            <h3>Orlando (MCO)</h3>
            <p>
              For our out of town guests, the Orlando International Airport (MCO) is the closest
              airport and provides several transportation options to the Walt Disney World Resort.
              If you choose to fly into MCO and are staying at a WDW Resort hotel,
              you can choose to book transportation direct to your hotel through
              <Link
                href="https://www.mearsconnect.com/?AspxAutoDetectCookieSupport=1"
                text=" Mears Connect "
              />
              or
              <Link
                href="https://sunshineflyer.com/?gclid=CjwKCAjwrNmWBhA4EiwAHbjEQIiT6zREtLgWfB-D2zHofMaAqNLMC3_6_5L-XpLcFISs9Cc1YhlJGBoC8ogQAvD_BwE"
                text=" The Sunshine Flyer"
              />
              .
            </p>
          </div>
          <div>
            <h3>Other Airports</h3>
            <p>
              Other nearby airports include the Orlando Sanford International Airport (SFB)
              and Tampa International Airport (TPA), however these are further away and will
              require a rental car or taxi. Prefer to travel by train? You can bring your car on
              the
              <Link
                href="https://www.amtrak.com/auto-train"
                text=" Amtrack Autotrain "
              />
              from Lorton, VA to Sanford, FL.
            </p>
          </div>
        </Grid>
        <p>
          <Icon className="fa-duotone fa-comment-question" />
          {' Need help? Feel free to'}
          <Link
            href="mailto:kmwagner91@gmail.com"
            text=" email the groom "
          />
          for assistance!
        </p>
        <HorizontalRule />
        <Accommodations />
        <HorizontalRule />
        <Activities />
      </Card>
    </Root>
  );
}
