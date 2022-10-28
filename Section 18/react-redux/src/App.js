import Auth from "./components/Auth";
// import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useAuthState } from "./features/authSlice";

function App() {
  const { isAuth } = useAuthState();

  return (
    <>
      <Header />
      {!isAuth ? <Auth /> : <UserProfile />}
      {/* <Counter /> */}
    </>
  );
}

export default App;
