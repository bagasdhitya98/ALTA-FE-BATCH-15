import { useState } from "react";
import Swal from "sweetalert2";

import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: `Welcome to News App, ${username}`,
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Please check your username or password",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button id="login" label="Login" onClick={() => handleLogin()} />
      </div>
    </div>
  );
};

export default Login;
