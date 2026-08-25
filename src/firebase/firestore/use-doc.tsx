'use client';

import { useEffect, useState } from 'react';
import { UserProfile } from '@/lib/types';

// Demo mode: no Firestore reads. Provide only the local demo profile used by the UI.
export function useDoc<T>(path: string | null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (path === 'users/demo-user') {
      const profile: UserProfile = {
        id: 'demo-user',
        uid: 'demo-user',
        displayName: 'Demo User',
        email: sessionStorage.getItem('aztec-demo-email') || 'demo@dentsu.com',
        photoURL: '',
        role: 'Admin',
        status: 'User Registered',
        permissions: ['dashboard', 'forecast', 'spends', 'snapshot', 'sales', 'wbr', 'tracker', 'actions', 'admin'],
      };
      setData(profile as unknown as T);
    } else {
      setData(null);
    }
    setLoading(false);
  }, [path]);

  return { data, loading, error: null };
}
