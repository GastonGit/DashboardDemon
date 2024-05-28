import { getTwitchVerificationUri } from "../../../domain/api/twitch";
import React from "react";

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        send: (channel: string, data?: any) => void;
        on: (channel: string, func: (...args: any[]) => void) => void;
      };
    };
  }
}

const App: React.FC = () => {
  const handleLogin = async () => {
    const verificationUri = await getTwitchVerificationUri();
    console.log(verificationUri);
    window.electron.ipcRenderer.send("open-activate-device", verificationUri);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Twitch</button>
    </div>
  );
};

export default App;
