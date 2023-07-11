import axios, { AxiosResponse } from "axios";
import { ILogin } from "./Interface/ILogin";

interface LoginResponseData {
  status: string;
  token: string;
}

export async function login(data: ILogin) {
  
    /*const jsonData = {
    Your login data object
  };*/

  /*const tData = data.Email;
  console.log("data : " + tData)*/

  const jsonData = {
    Email: data.Email,
    Password: data.Password,
  };

  try {
    const response: AxiosResponse<LoginResponseData> = await axios.post(
      "https://handsome-jade-vest.cyclic.app/v1/login",
      jsonData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.data.status === "ok") {
      alert("login success");
      //localStorage.setItem("token", response.data.token);
      //window.location.href = "/dashboard";
    } else {
      alert("login fail");
      //window.location.href = "/";
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
