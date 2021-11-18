import React, { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { override } from '../../global/loading';

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1500));

      setLoading((loading) => !loading);
    };
    loadData();
  }, []);
  return (
    <>
      {loading ? (
        <BeatLoader
          loading={loading}
          css={override}
          size={30}
          color={'#4a5185'}
        />
      ) : (
        ''
      )}
    </>
  );
};
export default Loading;
