import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import {
  Button,
  Label,
  Sidebar,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import Navbar from "../components/navbar";
import { FaLongArrowAltRight, FaRegUserCircle } from "react-icons/fa";
import { CiEdit, CiLogout } from "react-icons/ci";
import Footer from "../components/footer";

export default function Profile() {
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
    <Layout title="Profile">
      <div className="container">
        <div className="flex justify-end my-2 mr-6">
          <ToggleSwitch
            checked={switch1}
            onChange={setSwitch1}
            onClick={handleThemeSwitch}
          />
        </div>

        <Navbar />

        <div className="w-10/12 mx-auto rounded p-5 mt-10 custom-navbar dark:bg-orange-500">
          <h1 className="text-white text-3xl font-bold text-center">LOREM</h1>

          <div className="w-full md:w-6/12 mx-auto mt-2">
            <p className="text-white text-center text-sm">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque erat velit, dictum non urna in, consectetur aliquet justo.
              Vestibulum ut aliquam tortor, ac porta eros. Donec facilisis metus
              id augue bibendum, et hendrerit dui tempor. Nunc congue dapibus
              arcu, eget blandit nisi lobortis dignissim.&quot;
            </p>
          </div>
        </div>

        <div className="w-10/12 mx-auto mt-6">
          <div className="flex justify-between">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1">
                <FaRegUserCircle className="text-gray-500 w-14 h-14" />
              </div>

              <div className="col-span-3 flex items-center">
                <p className="text-lg font-bold">Noname</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-1 w-34 px-4 custom-navbar dark:bg-orange-500 rounded-full">
              <div className="col-span-1 flex items-center">
                <CiEdit className="text-white w-6 h-6" />
              </div>

              <div className="col-span-3 flex items-center">
                <p className="text-sm text-white">Edit Profile</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-5 mt-10">
            <div className="col-span-1 custom-display">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <div className="grid grid-cols-6 gap-1">
                    <div className="col-span-1 flex items-center justify-end">
                      <FaRegUserCircle className="text-gray-500 w-5 h-5" />
                    </div>

                    <div className="col-span-5">
                      <p className="text-gray-500">Profile</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-rows-2 mt-96">
                <hr className="w-11/12 mx-auto" />
                <div className="row-span-1">
                  <div className="grid grid-cols-6 gap-1">
                    <div className="col-span-1 flex items-center justify-end">
                      <CiLogout className="text-red-500 w-5 h-5" />
                    </div>

                    <div className="col-span-5">
                      <p className="text-red-500">Logout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 mt-4 md:mt-0">
              <div className="rounded shadow-xl">
                <div className="grid grid-cols-8 mb-2">
                  <div className="col-span-1 flex justify-end">
                    <CiEdit className="text-black w-14 h-14" />
                  </div>

                  <div className="col-span-7 flex items-center">
                    <p className="text-lg font-bold">Edit Profile</p>
                  </div>
                </div>

                <hr className="w-11/12 mx-auto" />

                <form className="flex px-11 flex-col gap-4 mt-6">
                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="userName"
                        value="Nama Anda"
                        className="dark:text-dark"
                      />
                    </div>
                    <TextInput
                      id="userName"
                      type="text"
                      color={"dark:info"}
                      required
                    />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="nomer"
                        value="Nomer Handphone"
                        className="dark:text-dark"
                      />
                    </div>
                    <TextInput
                      id="nomer"
                      type="text"
                      color={"dark:info"}
                      required
                    />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="password1"
                        value="Old Password"
                        className="dark:text-dark"
                      />
                    </div>
                    <TextInput
                      id="password1"
                      type="password"
                      color={"dark:info"}
                      required
                    />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label
                        htmlFor="password2"
                        value="New Password"
                        className="dark:text-dark"
                      />
                    </div>
                    <TextInput
                      id="password2"
                      type="password"
                      color={"dark:info"}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    color="blue"
                    className="mt-6 mb-4 text-white w-36 dark:bg-orange-500"
                  >
                    Edit Profile
                    <FaLongArrowAltRight className="ml-1 mt-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  );
}
