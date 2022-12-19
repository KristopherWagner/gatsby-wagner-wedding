import React from 'react';

import Link from '../Link';
import Question from './Question';

export default function Registry() {
  return (
    <>
      <Question>
        Do you have a registry?
      </Question>
      <p className="body1">
        We have decided to not have a registry; we understand that attending our wedding is
        expensive, and your presence is the best gift. However, if you wish to give, we will
        gratefully accept a small contribution towards our honeymoon, next home, or joining
        Disney&apos;s Vacation Club. Although unnecessary, you can bring cash or a check to the
        reception or
        {' '}
        <Link
          href="mailto:kmwagner91@gmail.com"
          text="email the groom"
        />
        {'  for information on Venmo, PayPal, or Zelle.'}
      </p>
    </>
  );
}
