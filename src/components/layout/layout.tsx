import type { ReactNode } from "react"
import Header from "./header";
import Footer from "./footer";
import ChatWidget from "../../features/home/chatWidget";
import { useLocation } from "react-router-dom";

type LayoutProps ={
    children : ReactNode
}

export default function Layout ({children}:LayoutProps){
  const location = useLocation();

  const hideLayoutRoutes = ['/login','/SignupForm'];

  const hideLayout = hideLayoutRoutes.includes(location.pathname)
    return (
     <div className="flex flex-col min-h-screen">
      {!hideLayout && <Header />}
      {!hideLayout && <ChatWidget />}
      <main className="flex-1">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
}