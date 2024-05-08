import React from "react";
import { Button } from "@mui/material";
import { SignOut } from "../../Services/Auth";

const index = () => {
  return (
    <>
      <div>index</div>
      <Button variant="outlined" onClick={SignOut}>
        Sign Out
      </Button>
    </>
  );
};

export default index;
