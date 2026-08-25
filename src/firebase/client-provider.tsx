'use client';

import { FirebaseProvider } from './provider';

// Demo mode: deliberately does not initialize Firebase, Auth, Firestore or Storage.
// The UI and components retain their original Firebase interfaces, but the demo
// supplies inert instances so the deployed app cannot reach the production backend.
export function FirebaseClientProvider({ children }: { children: React.ReactNode }) {
  const instances = {
    app: null as any,
    auth: null as any,
    firestore: null as any,
    storage: null as any,
  };

  return <FirebaseProvider value={instances}>{children}</FirebaseProvider>;
}
