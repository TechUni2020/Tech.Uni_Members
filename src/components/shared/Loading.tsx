import { CircularProgress } from "@material-ui/core";
import { FC } from "react";

type Props = {
  className?: string;
};

export const Loading: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <CircularProgress size={50} thickness={1} />
    </div>
  );
};
