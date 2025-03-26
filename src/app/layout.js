import "./globals.css";

import Header from "../../components/header";
import Footer from "../../components/footer";

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="h-full">
      <body className={`antialiased h-full`}>
        <div className="container-fluid mx-auto h-full">
          <div className="flex h-[calc(100vh-65px)]">
            <div className="w-[100px] bg-[#f7f6f1] border-r border-black text-black shadow-md">
              <Footer></Footer>
            </div>
            <div className="w-[calc(100%-100px)] bg-[#f7f6f1] text-black p-6 shadow-md">
              {children}
            </div>
          </div>
          <div className="flex">
            <Header></Header>
          </div>
        </div>
      </body>
    </html>
  );
}
