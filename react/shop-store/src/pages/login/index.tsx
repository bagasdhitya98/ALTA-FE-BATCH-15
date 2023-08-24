import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import axios from "axios";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    const body = {
      username: "mor_2314",
      password: "83r5^_",
    };
    axios
      .post("auth/login", body)
      .then((response) => {
        const token = response?.data?.token;
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Welcome to Satset, ${username}`,
          confirmButtonText: "OK",
        }).then((response) => {
          if (response.isConfirmed) {
            Cookies.set("token", token);
            Cookies.set("username", username);
            navigate("/product");
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center">
      <Input
        id="username"
        name="username"
        label="Username"
        value={username}
        onChange={(e: any) => setUsername(e.target.value)}
      />
      <Input
        id="password"
        name="password"
        label="Password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />
      <div className="w-60 my-5">
        <Button id="login" label="Login" onClick={() => handleLogin()} />
      </div>
    </section>
  );
};

export default Login;
