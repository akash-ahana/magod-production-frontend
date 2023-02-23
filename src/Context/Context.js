import Axios from "axios";
import React, { useContext, useState,useEffect } from "react";
import axios from "axios";


const AppContext = React.createContext();

const SnackbarContext = React.createContext({
  isDisplayed: false,
  displayMsg: (msg) => {},
  onClose: () => {},
});

const AuthProvider = ({ children }) => {
  const [post, setPost] = React.useState([]);


  const MachineTabledata=()=>{
    // console.log("Function called")
    axios.get("http://172.16.20.61:5000/productionSetup/getallmachines").then((response) => {
      setPost(response.data);
      // console.log(response.data)
    });
  }

  return (
    <AppContext.Provider
      value={{
        post,setPost, MachineTabledata,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AuthProvider, SnackbarContext };
