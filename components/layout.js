import React from "react";
import Head from "next/head";
import Logo from "../pages/images/logo.png";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        {/* <link rel="icon" href={Logo}></link> */}
        <link
          rel="icon"
          href="https://i.pinimg.com/564x/4b/74/67/4b74678fb3c9aafdbb1edac044e6017a.jpg"
        ></link>
      </Head>
      {props.children}
    </div>
  );
}
