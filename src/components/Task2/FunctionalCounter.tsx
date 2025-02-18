/**
 * Even though we don't write code in class components,
 * there is a lot of legacy code in the project that we have to work with.
 * We want to make sure that you are familiar with class components.
 *
 * Rewrite this functional component as a class-based component.
 * This component contains multiple useEffect hooks with different dependencies
 * and an additional state that influences rendering.
 *
 * Make sure the class-based component mirrors the behavior of the provided functional component.
 *
 * Task:
 * - Rewrite this functional component as a class-based component.
 * - Implement component lifecycle methods in place of useEffect hooks.
 * - Ensure that initial values of `count` and `clicks` are logged upon mounting.
 * - Maintain correct behavior when props or state change.
 */

import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

export const FunctionalCounter: React.FC<{
  count: number;
  initialName: string;
}> = ({ count, initialName }) => {
  const [name, setName] = useState(initialName || 'Anonymous');
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`Clicks have been updated: ${clicks}`);
  }, [clicks]);

  useEffect(() => {
    console.log('Setting up observers');

    return () => {
      console.log('Clear observers');
    };
  }, []);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <h1>FunctionalCounter</h1>
      <div>Name: {name}</div>
      <div>Count: {count}</div>
      <div>Clicks: {clicks}</div>
      <button onClick={handleClick}>Increment Clicks</button>
    </div>
  );
};
