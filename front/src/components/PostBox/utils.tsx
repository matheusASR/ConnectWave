import React, { useEffect, useState } from 'react';

interface TimeAgoProps {
  createdAt: string;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ createdAt }) => {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDate = new Date();
      const postDate = new Date(createdAt);

      const timeDifference = currentDate.getTime() - postDate.getTime();
      const minutes = Math.floor(timeDifference / (1000 * 60));

      if (minutes < 1) {
        setTimeAgo('Just now');
      } else if (minutes < 60) {
        setTimeAgo(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`);
      } else {
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (hours < 24) {
          setTimeAgo(`${hours} ${hours === 1 ? 'hour' : 'hours'} ago`);
        } else if (days < 30) {
          setTimeAgo(`${days} ${days === 1 ? 'day' : 'days'} ago`);
        } else if (months < 12) {
          setTimeAgo(`${months} ${months === 1 ? 'month' : 'months'} ago`);
        } else {
          setTimeAgo(`${years} ${years === 1 ? 'year' : 'years'} ago`);
        }
      }
    };

    calculateTimeAgo();
  }, [createdAt]);

  return <span>{timeAgo}</span>;
};

export default TimeAgo;

