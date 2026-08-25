'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checking, setChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const ok = sessionStorage.getItem('aztec-demo-authenticated') === 'true';
    if (!ok) {
      router.replace('/');
      return;
    }
    setAuthorized(true);
    setChecking(false);
  }, [router, pathname]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="animate-pulse text-sm font-medium">Loading...</p>
      </div>
    );
  }

  if (!authorized) return null;
  return <>{children}</>;
}
