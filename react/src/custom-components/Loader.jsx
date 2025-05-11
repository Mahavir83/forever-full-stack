import { useContext, useState } from "react";
import { RingLoader } from "react-spinners";
import { ShopContext } from "../context/ShopContext";

const Loader = () => {
  const { isLoading } = useContext(ShopContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "86vh",
      }}
    >
      <RingLoader
        color="#4ED7F1"
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
