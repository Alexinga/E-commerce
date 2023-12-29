import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoaderSpinner from "./LoaderSpinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="relative">
      {isLoading && <LoaderSpinner />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
