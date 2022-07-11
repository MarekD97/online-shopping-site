import React, { PropsWithChildren } from "react";

const PrimaryButton = (props: PropsWithChildren<any>): JSX.Element => {
  return (
    <button
      className="bg-sky-500 px-8 py-2 text-white font-bold transition-colors hover:bg-sky-400"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
