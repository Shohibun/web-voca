import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import Logo from "../pages/images/logo.png";
import {
  Button,
  Carousel,
  Label,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { IoEyeSharp } from "react-icons/io5";

export default function Login() {
  const [switch1, setSwitch1] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Layout title="Login">
      <div className="container">
        <div className="grid md:grid-cols-2">
          <div className="col-span-1 flex justify-center items-center dark:bg-orange-500 custom-login-left custom-display">
            <div>
              {/* <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"/> */}
              <Image src={Logo} alt="Logo" className="mx-auto w-80" />

              <h1 className="font-bold text-white text-center text-2xl mt-5">LOREM</h1>

              <div className="h-32">
                <Carousel leftControl={false} rightControl={false} className="w-96">
                  <p className="text-white text-center text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <p className="text-white text-center text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <p className="text-white text-center text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Carousel>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="flex justify-end mt-4 mr-6">
              <ToggleSwitch checked={switch1} onChange={setSwitch1} onClick={handleThemeSwitch} />
            </div>

            <div className="flex justify-center items-center  custom-login-right">
              <div className="">
                <h1 className="font-bold text-blue-700 dark:text-orange-500 text-3xl">
                  Silahkan LogIn
                </h1>

                <p className="text-sm text-gray-400 mt-2">
                  Masukan Username dan Password anda untuk masuk
                </p>

                <form className="flex max-w-md flex-col gap-4 mt-6" action="/profile">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="userName" value="Username" className="dark:text-black" />
                    </div>
                    <TextInput id="userName" type="text" color={"dark:info"} required />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="Password" className="dark:text-black" />
                    </div>
                    <TextInput
                      id="password1"
                      type="password"
                      rightIcon={IoEyeSharp}
                      color={"dark:info"}
                      required
                    />
                  </div>

                  <Button type="submit" color="blue" className="mt-6 dark:bg-orange-500">
                    Masuk Sekarang
                  </Button>
                </form>

                <p className="mt-4 text-center">
                  Belum punya akun ?{" "}
                  <span className="font-bold text-blue-700 dark:text-orange-500">
                    <Link href="/">Daftar Sekarang</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
