import React from 'react';

const TestComponent = () => {
  const random = () => {
    const bla = [];
    for (let i = 0; i < 1000000; i += 1) {
      bla.push(<div>yo</div>);
    }
    return bla;
  };

  return <div>{random().map((e) => e)}</div>;
};

export default TestComponent;
