'use client';

import { useEffect, useState } from 'react';

// Demo mode: deliberately returns local empty collections instead of contacting Firestore.
export function useCollection<T>(_path: string, _queryConstraints: any[] = []) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData([]);
    setLoading(false);
  }, []);

  return { data, loading, error: null };
}
