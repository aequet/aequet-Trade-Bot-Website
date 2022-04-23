import "../styles/globals.css";
import { NextSeo } from "next-seo";

function aetb({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="aequet trade bot"
        description="AETB is a trading bot for the roblox platform"
        additionalMetaTags={[
          {
            property: "theme-color",
            content: "#5E81AC",
          },
        ]}
        openGraph={{
          title: "aequet trade bot",
          description: "AETB is a trading bot for the roblox platform",
        }}
      />
      <div className="text-white">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default aetb;
