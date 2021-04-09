import { useEffect, useState } from 'react';

const useLoading = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);

      setState({
        loading: false,
        data: await result.json(),
      });
    };

    fetchData();
  }, [url]);

  return [state];
};

export default useLoading;
