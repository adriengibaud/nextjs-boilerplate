import { useState } from 'react';

import dynamic from 'next/dynamic';

const Test = dynamic(() => import('src/components/TestComponent'));

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>click</button>
      yoyoyo
      {show && <Test />}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      display: false,
    },
  };
}

export default About;
