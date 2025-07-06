import React, { useState, useEffect } from "react";
import supabase from "../lib/supabase-client";
import { useNavigate } from "react-router-dom";

let ResetPass = () => {
  let [newPass, setNewPass] = useState("");
  let [confirmPass, setConfirmPass] = useState("");
  let [message, setMessage] = useState("");
  let navigateTo = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("session:", session);
      if (!session) {
        setMessage(
          "⚠️ Your reset link is missing or expired. Please click the email link again."
        );
      }
    });
  }, []);

  let handleResetPassword = async () => {
    if (!newPass || !confirmPass) {
      setMessage("⚠️ Both fields are required.");
      return;
    }
    if (newPass !== confirmPass) {
      setMessage("⚠️ Passwords do not match.");
      return;
    }

    try {
      let { error } = await supabase.auth.updateUser({ password: newPass });
      if (error) {
        console.log(error.message);
        setMessage(`⚠️ ${error.message}`);
      } else {
        setMessage("✅ Your password has been reset. You can now log in!");
        setTimeout(() => navigateTo("/auth"), 2000);
      }
    } catch (error) {
      console.log(error);
      setMessage("⚠️ Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="mt-20 sm:mt-32 sm:mx-10 lg:mx-20 xl:mx-30 selection:bg-amber-200 selection:text-black">
        <div className="rounded-xl bg-zinc-50 border-2 border-zinc-200 px-6 py-6">
          {message && (
            <h1 className="text-center font-space text-zinc-700 mb-4 bg-amber-100 text-sm md:text-base rounded-lg p-4">
              {message}
            </h1>
          )}

          <input
            type="password"
            placeholder="Drop in your new password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            className="border-2 rounded-md my-2 bg-white border-zinc-100 px-6 py-2 w-full font-space outline-none text-sm md:text-base"
          />

          <input
            type="password"
            placeholder="Confirm your new password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="border-2 rounded-md my-2 bg-white border-zinc-100 px-6 py-2 w-full font-space outline-none text-sm md:text-base"
          />

          <button
            onClick={handleResetPassword}
            className="w-full bg-[#3A86FF] font-space text-white rounded py-1 mt-4 active:bg-[#3a51ff]"
          >
            Update Password
          </button>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
