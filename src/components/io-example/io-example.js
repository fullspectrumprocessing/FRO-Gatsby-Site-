import React from 'react';
import IO from 'components/io';
import { Container } from './io-example.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <h3>We Accept</h3>
        <a href="http://www.merchantequip.com/information-center/credit-card-logos/">
          <img
            src="https://www.merchantequip.com/image/?logos=v|m|a|d|ec&height=64"
            alt="Merchant Equipment Store Credit Card Logos"
          />
        </a>
      </Container>
    )}
  </IO>
);

export default IOExample;
