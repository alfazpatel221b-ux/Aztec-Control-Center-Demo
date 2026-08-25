'use client';

import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';

const DEMO_USER = {
  uid: 'demo-user',
  email: 'demo@dentsu.com',
  displayName: 'Demo User',
  photoURL: '',
} as unknown as User;

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sync = () => {
      setUser(sessionStorage.getItem('aztec-demo-authenticated') === 'true' ? DEMO_USER : null);
      setLoading(false);
    };
    sync();
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  return { user, loading };
}
