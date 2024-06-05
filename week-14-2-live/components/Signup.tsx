"use client";

import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
//useroter is used to redirect the page to home after signup

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
//this is a object that can be used in onChange attribute of LabelledInput
  const handleUsernameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };
  //haven't used the hendleUsername or other but could
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign Up</div>
            </div>
            <div className="pt-2">
              <LabelledInput
                label="Username"
                placeholder="harkirat@gmail.com"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                  }}
              />
              <LabelledInput
                label="Password"
                type={"password"}
                placeholder="123456"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                  }}
              />
              <button
                onClick={async () => {
                    await axios.post("http://localhost:3000/api/user", {
                      username,
                      password,
                    });
                    router.push("/"); // Navigate back to the home page
                  }}
                type="button"
                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Sign up
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function LabelledInput({
  label,
  placeholder,
  type,
  value,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
