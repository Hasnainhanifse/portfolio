import Head from "next/head";
import { useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import StateProvider  from "../context/context";
import { customCursor, dataImage, imgToSVG, preloader } from "../utilits";
import { waves } from "../waves";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import Mouse from "./Mouse";
import PreLoader from "./PreLoader";
import Settings from "./Settings";

const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
    customCursor();
    preloader();
    waves();
    imgToSVG();
  }, []);

  return (
    <StateProvider >
      <Head>
        <title>Hasnain Hanif | Full Stack Developer</title>
      </Head>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div
        className="rs_tm_all_wrap"
        data-magic-cursor="show"
        data-enter="fadeInUp"
        data-exit=""
      >
        {/* WAVE DOTS */}
        <div className="waves" />

        {/* WAVE DOTS */}
        {/* SETTINGS */}
        {/* <Settings /> */}
        {/* /SETTINGS */}
        {/* MOBILE MENU */}
        <MobileHeader />
        {/* /MOBILE MENU */}
        {/* HEADER */}
        <Header />
        {/* /HEADER */}
        {/* CONTENT */}
        <div className="rs_tm_content">{children}</div>
        {/* /CONTENT */}
        {/* MAGIC CURSOR */}
        <Mouse />
        {/* /MAGIC CURSOR */}
      </div>
    </StateProvider>
  );
};
export default Layout;
