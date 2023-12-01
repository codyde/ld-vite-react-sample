import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

function Main() {
  const [LDProvider, setLDProvider] = useState<((props: { children: React.ReactNode }) => React.ReactElement) | null>(null);

  useEffect(() => {
    async function initializeLDProvider() {
      const provider = await asyncWithLDProvider({
        clientSideID: import.meta.env.VITE_NEXT_PUBLIC_LD_CLIENT_KEY || "",
        reactOptions: {
          useCamelCaseFlagKeys: false,
        },
        context: {
          kind: "multi",
          user: {
            key: 1,
            name: "Jenn",
            appName: "DefaultDemo",
          },
        },
      });
      setLDProvider(() => provider);
    }

    initializeLDProvider();
  }, []);

  return LDProvider ? (
    <LDProvider>
      <App />
    </LDProvider>
  ) : (
    <div>Loading...</div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />)