import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar/Sidebar";
import HomeMenu from "@/components/Shared/HomeMenu/HomeMenu";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar /> */}
      <HomeMenu />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
