"use client";
import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
// import { toast } from "react-toastify";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// import { useEffect } from "react";
export default function SocialLogin() {
  //   const router = useRouter();
  //   const session = useSession();

  const handleSocialLogin = async (providerName) => {
    const result = await signIn(providerName, { redirect: false });
    console.log(result)
  };

  //   useEffect(() => {
  //     if (session?.status == "authenticated") {
  //       router.push("/");
  //       toast.success("Successfully Logged IN");
  //     }
  //   }, [session?.status]);

  return (
    <div className="flex justify-center gap-8">
      <p
        onClick={() => handleSocialLogin("google")}
        className="bg-slate-200 rounded-full p-3"
      >
        <FaGoogle type="button" />
      </p>
      <p
        onClick={() => handleSocialLogin("github")}
        className="bg-slate-200 rounded-full p-3"
      >
        <FaGithub type="button" />
      </p>
    </div>
  );
}
