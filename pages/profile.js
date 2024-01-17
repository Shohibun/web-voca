import React, { useState } from "react";
import Layout from "../components/layout";
import {
  Button,
  Label,
  Sidebar,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import Navbar from "../components/navbar";
import {
  FaHospitalUser,
  FaLongArrowAltRight,
  FaRegUserCircle,
} from "react-icons/fa";
import { CiEdit, CiLogout } from "react-icons/ci";
import Footer from "../components/footer";
import { IoEyeSharp } from "react-icons/io5";

export default function Profile() {
  const [switch1, setSwitch1] = useState(false);

  return (
    <Layout title="Profile">
      <div className="container">
        <div className="flex justify-end my-2 mr-6">
          <ToggleSwitch checked={switch1} onChange={setSwitch1} />
        </div>

        <Navbar />

        <div className="w-10/12 mx-auto rounded p-5 mt-10 custom-navbar">
          <h1 className="text-white text-3xl font-bold text-center">LOREM</h1>

          <div className="w-6/12 mx-auto mt-2">
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

            <div className="grid grid-cols-4 gap-1 w-34 px-4 custom-navbar rounded-full">
              <div className="col-span-1 flex items-center">
                <CiEdit className="text-white w-6 h-6" />
              </div>

              <div className="col-span-3 flex items-center">
                <p className="text-sm text-white">Edit Profile</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5">
            <div className="col-span-1">
              <Sidebar aria-label="Default sidebar example">
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={FaRegUserCircle}>
                      Profile
                    </Sidebar.Item>
                    <Sidebar.Item
                      href="/"
                      icon={CiLogout}
                      color="red"
                      className="text-red-500"
                    >
                      Logout
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </Sidebar>
            </div>

            <div className="col-span-4">
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
                      <Label htmlFor="userName" value="Nama Anda" />
                    </div>
                    <TextInput id="userName" type="text" required />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="nomer" value="Nomer Handphone" />
                    </div>
                    <TextInput id="nomer" type="text" required />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="Old Password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                  </div>

                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password2" value="New Password" />
                    </div>
                    <TextInput id="password2" type="password" required />
                  </div>

                  <Button
                    type="submit"
                    color="blue"
                    className="mt-6 mb-4 text-white w-36"
                  >
                    Edit Profile
                    <FaLongArrowAltRight className="ml-1" />
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
