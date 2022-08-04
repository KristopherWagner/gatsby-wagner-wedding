import React from 'react';
import styled from 'styled-components';

import { BACKGROUND_LIGHT } from './Colors';
import HorizontalRule from './HorizontalRule';

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Root = styled.div`
  background-color: ${BACKGROUND_LIGHT};
  padding: 24px;
  text-align: center;
`;

const NormalCard = styled.div`
  padding: 0px 8px;
`;

const WideCard = styled.div`
  grid-column: 1 / span 3;
`;

const Youtube = styled.i`
  color: red;
`;

export default function Covid() {
  return (
    <Root id="covid">
      <div>
        <h3>COVID-19</h3>
        <p className="subtitle2">
          We wish we didn&apos;t have to have this conversation but we want to ensure the safety of
          our friends and family as we celebrate together.
        </p>
        <HorizontalRule />
        <Container>
          <WideCard>
            <h4>Vaccination Requirement</h4>
            <p className="body1">
              We are requiring that all guests be fully vaccinated prior to the events.
              This choice is not intended to be about politics, personal, or religious beliefs, or
              individual liberties. We know many of you are flying, and we want to ensure that we
              are considerate and mindful of everyone&apos;s health, safety, and level of comfort.
              We do fully understand that the decision to be vaccinated is a personal choice and
              that not everyone ascribes to receiving a Covid-19 vaccine. It is our wish to err on
              the side of caution, doing everything in our power to provide the most safe venue for
              us and all of our guests to feel comfortable while attending. If you are unable or
              unwilling to be vaccinated prior to attending we will certainly miss having you there
              and will look forward to celebrating with you another time.
            </p>
          </WideCard>
          <NormalCard>
            <h4>Masks</h4>
            <p className="body1">
              We plan to comply with local regulations regarding masks, gathering size, and social
              distancing. If any local regulations impact our ability to celebrate in a safe
              manner, we will communicate any updates as soon as we can.
            </p>
          </NormalCard>
          <NormalCard>
            <h4>
              <Youtube className="fa-brands fa-youtube" />
              {' Live Stream'}
            </h4>
            <p className="body1">
              We will provide a live stream of our ceremony for anyone that is unable to comply
              with these measures.
            </p>
          </NormalCard>
        </Container>
      </div>
    </Root>
  );
}
