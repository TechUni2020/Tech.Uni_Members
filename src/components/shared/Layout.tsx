import type { ReactNode, VFC } from "react";
import type { HeaderProps } from "../layouts/Header";
import { Header } from "../layouts/Header";

type Props = HeaderProps & {
  children: ReactNode;
  isHeaderNarrow?: boolean;
};

export const Layout: VFC<Props> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { children, ...headerProps } = props;

  return (
    <div className="pb-20">
      <div
        className="pt-4 pb-8 mx-auto"
        // className={`px-3 pt-4 pb-8 mx-auto sm:px-4 sm:pb-14 ${
        //   isHeaderNarrow ? "max-w-screen-sm" : "max-w-screen-lg"
        // }`}
      >
        <Header {...headerProps} />
      </div>
      <div className="pt-4 px-4 mx-auto w-full max-w-screen-sm">{children}</div>
    </div>
  );
};
