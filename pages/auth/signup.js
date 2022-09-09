import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const router = useRouter();

  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    res.error == "invalid credentials"
      ? alert("invalid email or password")
      : router.replace("/");
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="john@email.com"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
