import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { Button, Label, TextInput, ToggleSwitch } from "flowbite-react";
import { IoEyeSharp } from "react-icons/io5";

export default function Register() {
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
    <Layout title="Register">
      <div className="container">
        <div className="flex justify-end my-2 mr-6">
          <ToggleSwitch
            checked={switch1}
            onChange={setSwitch1}
            onClick={handleThemeSwitch}
          />
          {/* <Button color="blue" onClick={handleThemeSwitch}>
            Blue
          </Button> */}
        </div>

        <div className="w-full flex justify-center items-center custom-register dark:bg-orange-500">
          <div>
            <h1 className="text-white text-5xl font-bold">Daftarkan Akun</h1>

            <p className="text-white">
              Daftarkan akun anda dengan mengisi form dibawah
            </p>

            <form className="flex max-w-md flex-col gap-4 mt-6" action="/login">
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="userName"
                    value="Nama Anda"
                    className="text-white"
                  />
                </div>
                <TextInput id="userName" type="text" color={"info"} required />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="nomer"
                    value="Nomer Handphone"
                    className="text-white"
                  />
                </div>
                <TextInput id="nomer" type="text" color={"info"} required />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password1"
                    value="Password"
                    className="text-white"
                  />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  rightIcon={IoEyeSharp}
                  color={"info"}
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="password2"
                    value="Konfrimasi Password"
                    className="text-white"
                  />
                </div>
                <TextInput
                  id="password2"
                  type="password"
                  rightIcon={IoEyeSharp}
                  color={"info"}
                  required
                />
              </div>

              <Button type="submit" color="dark" className="mt-6">
                Masuk Sekarang
              </Button>
            </form>

            <p className="mt-4 text-center text-white">
              Belum punya akun ?{" "}
              <span className="font-bold text-white">
                <Link href="/login">Login Sekarang</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
