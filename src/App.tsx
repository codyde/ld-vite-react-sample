import osmo from "/ld-light.png";
import "./index.css";
import { useFlags } from "launchdarkly-react-client-sdk";

function App() {
  const { hithere } = useFlags();

  console.log(hithere);

  return (
    <>
      <div className="bg-black h-screen text-white">
        <div className="flex mx-auto items-center justify-center pt-20">
          <img src={osmo} />
        </div>
        <p className="text-6xl font-bold text-center pt-10">
          LaunchDarkly in Vite + React
        </p>
        <div className="text-3xl flex">
          {hithere ? (
            <div className="flex mx-auto items-center text-center pt-10">
              <p>
                The <pre className="py-4 text-yellow-500">hithere</pre> flag is
                currently <span className="text-blue-500">on</span>
              </p>
            </div>
          ) : (
            <div className="flex mx-auto items-center text-center pt-10">
              <p>
                The <pre className="py-4 text-yellow-500">hithere</pre> flag is
                currently <span className="text-red-500">off</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
