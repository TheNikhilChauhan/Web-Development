import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./store/atoms";
import { useRecoilValue, RecoilRoot, useRecoilState } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);

  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const [messageCount, setMessageCount] = useRecoilState(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <div>
        <button>Home</button>

        <button>
          My Network (
          {networkNotificationCount > 100 ? "99+" : networkNotificationCount})
        </button>
        <button>
          Jobs ({jobsNotificationCount > 100 ? "99+" : jobsNotificationCount})
        </button>
        <button>Messaging ({messageCount > 100 ? "99+" : messageCount})</button>
        <button>
          Notification ({notificationCount > 100 ? "99+" : notificationCount})
        </button>

        <button
          onClick={() => {
            setMessageCount((c) => c + 1);
          }}
        >
          Me ({totalNotificationCount})
        </button>
      </div>
    </>
  );
}

export default App;
