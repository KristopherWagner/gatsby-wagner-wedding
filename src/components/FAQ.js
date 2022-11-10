import React from 'react';

import { BACKGROUND_LIGHT_TEXT } from './Colors';
import HorizontalRule from './HorizontalRule';
import Link from './Link';

export default function FAQ() {
  return (
    <>
      <h3>Frequently Asked Questions</h3>
      <HorizontalRule color={BACKGROUND_LIGHT_TEXT} />
      <h5><em>Can I bring my young children?</em></h5>
      <p className="body1">
        We have decided to have an adult-only ceremony and reception; however,
        your children are more than welcome to travel with you and attend our rehearsal dinner.
        If you need an in-room sitter for the ceremony and reception, you can use
        {' '}
        <Link
          href="https://kidsniteout.com/"
          text="Kid's Nite Out"
        />
        {' '}
        or a similar service. We appreciate your understanding.
      </p>
    </>
  );
}
