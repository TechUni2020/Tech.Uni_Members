import clsx from "clsx";
import type { VFC } from "react";

type Props = {
  className?: string;
  size?: "large" | "small";
  iconColor?: "white" | "gray";
};

export const TwitterIcon: VFC<Props> = (props) => {
  const classes = clsx([
    {
      "w-8 h-8": props.size === "large",
      "w-6 h-6": props.size === "small",
      "text-white": props.iconColor === "white",
      "text-gray-600": props.iconColor === "gray",
    },
    props.className,
  ]);

  return (
    <svg
      className={classes}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M64 13.194a23.1 23.1 0 0 1-7.3 2.1 14.119 14.119 0 0 0 5.5-7.2c-1.9 1.2-6.1 2.9-8.2 2.9a13.782 13.782 0 0 0-9.6-4 13.187 13.187 0 0 0-13.2 13.2 13.576 13.576 0 0 0 .3 2.9c-9.9-.3-21.5-5.2-28-13.7a13.206 13.206 0 0 0 4 17.4c-1.5.2-4.4-.1-5.7-1.4-.1 4.6 2.1 10.7 10.2 12.9-1.6.8-4.3.6-5.5.4.4 3.9 5.9 9 11.8 9-2.1 2.4-9.3 6.9-18.3 5.5a39.825 39.825 0 0 0 20.7 5.8 36.8 36.8 0 0 0 37-38.6v-.5a22.861 22.861 0 0 0 6.3-6.7z" />
    </svg>
  );
};

// Propsのデフォルト値
TwitterIcon.defaultProps = {
  className: "",
  size: "small",
};
