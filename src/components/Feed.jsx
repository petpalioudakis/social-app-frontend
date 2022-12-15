import { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { useParams } from 'react-router-dom';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import { MasonryLayout } from './MasonryLayout';

export const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then(data => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then(data => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (loading)
    return <Spinner message={'we are adding some ideas to your feed'} />;

  return <>{pins && <MasonryLayout pins={pins} />}</>;
};
