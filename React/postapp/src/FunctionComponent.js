import { useEffect, useState } from 'react';

function FunctionComponent(props) {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);
  let [z, setZ] = useState(0);

  useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('removed');
    };
  }, []);

  useEffect(() => {
    console.log('updated');
  }, [x, y]);

  return (
    <div
      onClick={() => {
        setX(x + 1);
      }}
    >
      Function: {x} {props.a}
    </div>
  );
}

export default FunctionComponent;
