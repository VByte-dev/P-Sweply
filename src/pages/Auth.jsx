import React, { use, useState } from "react";
import supabase from "../lib/supabase-client";
import { redirect, useNavigate } from "react-router-dom";

let Auth = () => {
  let navigateTo = useNavigate();

  // Handle weather signup or signin
  let [isSignUp, setIsSignUp] = useState(true);
  let handleIsSignUp = () => {
    setIsSignUp(true);
  };
  let handleIsSignIn = () => {
    setIsSignUp(false);
  };

  // Handle SignUp
  let [suEmail, setSuEmail] = useState("");
  let [suPass, setSuPass] = useState("");
  let [verNotify, setVerNotify] = useState(false);
  let [suErrMsg, setSuErrMsg] = useState("");

  let onChangeSuEmail = (v) => {
    setSuEmail(v.target.value);
  };
  let onChangeSuPass = (v) => {
    setSuPass(v.target.value);
  };

  let signUp = async () => {
    let { error } = await supabase.auth.signUp({
      email: suEmail,
      password: suPass,
    });
    if (error) {
      console.log(error.message);
      setSuErrMsg(error.message);
      setVerNotify(false);
    } else {
      setVerNotify(true);
      setSuEmail("");
      setSuPass("");
      setSuErrMsg("");
    }
  };

  // Handle SignIn
  let [siEmail, setSiEmail] = useState("");
  let [siPass, setSiPass] = useState("");
  let [siErrMsg, setSiErrMsg] = useState("");
  let [resNotify, setResNotify] = useState(false);

  let onChangeSiEmail = (v) => {
    setSiEmail(v.target.value);
  };
  let onChangeSiPass = (v) => {
    setSiPass(v.target.value);
  };
  let signIn = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: siEmail,
      password: siPass,
    });
    if (error) {
      console.log(error.message);
      setSiErrMsg(error.message);
      setResNotify(false);
    } else {
      setSiEmail("");
      setSiPass("");
      navigateTo("/drop");
      setSiErrMsg("");
    }
  };

  // Handle forget password
  let handleForgetPass = async () => {
    let { data, error } = await supabase.auth.resetPasswordForEmail(siEmail);
    if (error) {
      console.log(error.message);
      setSiErrMsg(error.message);
      setResNotify(false);
    } else {
      setResNotify(true);
      setSiErrMsg("");
    }
  };

  return (
    <>
      <div className="mt-24 sm:mt-32 sm:mx-10 lg:mx-20 xl:mx-30 selection:bg-amber-200 selection:text-black">
        {/* Is SignUp or SignIn Toggle */}
        <div className="flex justify-around my-4">
          <h1
            className={`font-space ${
              isSignUp
                ? "bg-[#3A86FF] text-white text-sm md:text-base border-1 border-[3A86FF]"
                : "bg-zinc-100 text-sm md:text-base border-1 border-zinc-200"
            }   rounded px-3 py-1 cursor-pointer `}
            onClick={handleIsSignUp}
          >
            SignUp
          </h1>
          <h1
            className={`font-space ${
              !isSignUp
                ? "bg-[#3A86FF] text-white text-sm md:text-base border-1 border-[3A86FF]"
                : "bg-zinc-100 text-sm md:text-base border-1 border-zinc-200"
            } rounded px-3 py-1 cursor-pointer`}
            onClick={handleIsSignIn}
          >
            LogIn
          </h1>
        </div>

        {/* SignUp and SignIn page */}
        {isSignUp ? (
          <div className="rounded-xl bg-zinc-50 border-2 border-zinc-200  px-6 py-6">
            {/* Verification message */}
            <div>
              <h1
                className={`text-center font-space text-zinc-700 mb-4  bg-green-100  text-sm md:text-base rounded-lg p-4 ${
                  verNotify ? "block" : "hidden"
                }`}
              >
                📬 We've sent you a verification email - open it to start
                dropping thoughts into Sweply.
              </h1>
            </div>

            {/* Error message */}
            {suErrMsg.length > 1 ? (
              <div>
                <h1
                  className={`text-center font-space text-zinc-700 mb-4  bg-amber-100  text-sm md:text-base rounded-lg p-4`}
                >
                  ⚠️ {suErrMsg}
                </h1>
              </div>
            ) : (
              ""
            )}

            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Drop in your email"
                className="border-2 rounded-md my-2 bg-white border-zinc-100 px-6 py-2 w-full font-space outline-none text-sm md:text-base"
                onChange={onChangeSuEmail}
                value={suEmail}
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Drop in your password"
                className="border-2 rounded-md my-2 bg-white border-zinc-100 px-6 py-2 w-full font-space outline-none text-sm md:text-base"
                onChange={onChangeSuPass}
                value={suPass}
              />
            </div>
            <div>
              <button
                className="w-full bg-[rgb(58,134,255)] font-space text-white rounded py-1 mt-6 active:bg-[#3a51ff] "
                onClick={signUp}
              >
                SignUp
              </button>
            </div>
            <div>
              <h1
                className="font-space text-blue-700 text-center text-sm mt-8 cursor-pointer"
                onClick={() => {
                  setIsSignUp(false);
                }}
              >
                I already have an account
              </h1>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-zinc-50 border-2 border-zinc-200  px-6 py-6 text-md  text-md">
            {/* Reset password message */}
            {resNotify ? (
              <div>
                <h1
                  className={`text-center font-space text-zinc-700 mb-4  bg-green-100  text-sm md:text-base rounded-lg p-4 ${
                    resNotify ? "block" : "hidden"
                  }`}
                >
                  📬 We’ve sent you a reset link. Check your mail to set a new
                  password.
                </h1>
              </div>
            ) : (
              ""
            )}

            {/* Error message */}
            {siErrMsg.length > 0 ? (
              <div>
                <h1
                  className={`text-center font-space text-zinc-700 mb-4  bg-amber-100  text-sm md:text-base rounded-lg p-4`}
                >
                  ⚠️ {siErrMsg}
                </h1>
              </div>
            ) : (
              ""
            )}

            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Drop in your email"
                className="border-2 rounded-md my-2 bg-white border-zinc-100 px-6 py-2 w-full font-space outline-none text-sm md:text-base"
                onChange={onChangeSiEmail}
                value={siEmail}
              />
            </div>

            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Drop in your password"
                className="border-2 rounded-md my-2 bg-white border-zinc-100 px-6 py-2 w-full font-space outline-none text-sm md:text-base"
                onChange={onChangeSiPass}
                value={siPass}
              />
            </div>
            <div>
              <button
                className="w-full bg-[#3A86FF] font-space text-white rounded py-1 mt-6 active:bg-[#3a51ff] "
                onClick={signIn}
                value={siPass}
              >
                LogIn
              </button>
            </div>
            <div>
              <h1
                className="font-space text-blue-700 text-center text-sm mt-8 cursor-pointer"
                onClick={() => {
                  setIsSignUp(true);
                }}
              >
                I dont't have an account
              </h1>
              <h1
                className="font-space text-blue-700 text-center text-sm mt-4 cursor-pointer"
                onClick={handleForgetPass}
              >
                Forget password?
              </h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Auth;
