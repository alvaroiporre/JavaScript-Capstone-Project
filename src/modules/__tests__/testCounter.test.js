/**
 * @jest-environment jsdom
 */

import { incrementCounter, updateCounter } from '../showCounter.js';

describe('counter', () => {
  let counter;

  beforeEach(() => {
    counter = { showsTotal: 0 };
    document.body.innerHTML = '<div id="nav-counter"></div>';
  });

  test('incrementCounter should increment the counter and update the element', () => {
    incrementCounter(counter);
    const counterElement = document.getElementById('nav-counter');
    expect(counterElement.textContent).toBe('(1)');

    incrementCounter(counter);
    expect(counterElement.textContent).toBe('(2)');
  });

  test('updateCounter should update the element with the current counter value', () => {
    counter.showsTotal = 2;
    updateCounter(counter);
    const counterElement = document.getElementById('nav-counter');
    expect(counterElement.textContent).toBe('(2)');
  });
});
