import { useState } from 'react';

import TestComponent from 'src/components/TestComponent';

// const Test = dynamic(() => import('src/components/TestComponent'));

const About = ({ display }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>click</button>
      yoyoyo
      {display && <TestComponent />}
    </div>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: {
      display: false,
    },
  };
}

export default About;
