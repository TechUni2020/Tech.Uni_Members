import { CircularProgress } from "@material-ui/core";
import { FC } from "react";

export const Loading: FC = () => {
  return (
    <div className="flex justify-center h-screen mt-4">
      <CircularProgress size={50} thickness={1} />
    </div>
  );
};
