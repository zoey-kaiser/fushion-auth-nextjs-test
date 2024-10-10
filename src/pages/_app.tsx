import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react"

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
};

export default MyApp;
