import { useEffect, useState } from 'react';

function CountdownTimer({ targetDate }) {

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, }
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative w-[420px] flex items-center flex-row bg-white text-2xl font-semibold p-7 rounded-2xl text-center">
  <div className="flex flex-col items-center w-20">
    <div className='text-3xl'>{timeLeft.days}</div>
    <div className='text-sm font-normal'>Days</div>
  </div>

  <div className="flex flex-col items-center border-l-2 pl-4 w-24">
    <div className='text-3xl'>{timeLeft.hours}</div>
    <div className='text-sm font-normal'>Hours</div>
  </div>

  <div className="flex flex-col items-center border-l-2 pl-4 w-24">
  <div className='text-3xl'>{timeLeft.minutes}</div>
  <div className='text-sm font-normal'>Mins</div>
  </div>

  <div className="flex flex-col items-center border-l-2 pl-4 w-24">
  <div className='text-3xl'>{timeLeft.seconds}</div>
  <div className='text-sm font-normal'>Secs</div>
  </div>
</div>

  )
}

export default CountdownTimer;
