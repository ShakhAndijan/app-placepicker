import { useEffect, useState } from 'react';

export default function ProgressBar({ timer }) {
  const [remainningTIme, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress max={timer} value={remainningTIme} />;
}
