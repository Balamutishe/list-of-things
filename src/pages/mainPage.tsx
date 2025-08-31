import { ThingsView } from "@features/things/thingsView";
import Footer from "@widgets/footer";
import Header from "@widgets/header";
import Main from "@widgets/main";
import ListThings from "@widgets/list";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Main>
        <ListThings title="List of Things" items={<ThingsView />} />
      </Main>
      <Footer />
    </>
  );
};
