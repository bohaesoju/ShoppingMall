import * as React from 'react';

const Study2 = () => {
  const show = false;
  return (
    <>
      {show === true ? (
        <p>show! this page!</p>
      ) : (
        <p>hide! this page!</p>
      )}
    </>
  );
};

export default Study2;
