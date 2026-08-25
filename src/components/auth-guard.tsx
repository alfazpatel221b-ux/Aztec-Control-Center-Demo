'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Demo authentication guard.
 *
 * The demo intentionally does not use Firebase Authentication or user
 * profiles. Login is represented by a sessionStorage flag created by the
 * demo login page. This keeps the production application's authentication
 * completely separate while allowing recruiters to explore every dashboard
 * area without creating accounts.
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('aztec-demo-authenticated') === 'true';

    if (!isAuthenticated) {
      router.replace('/');
      return;
    }

    setAuthenticated(true);
    setChecked(true);
  }, [router]);

  if (!checked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="animate-pulse text-sm font-medium">Loading...</p>
      </div>
    );
  }

  if (!authenticated) return null;

  return <>{children}</>;
}
