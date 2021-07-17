import type { ReactNode, VFC } from "react";
import type { HeaderProps } from "../layouts/Header";
import { Header } from "../layouts/Header";
import Sidebar from "./MenuBar";

type Props = HeaderProps & {
  children: ReactNode;
  // isHeaderNarrow?: boolean;
};

export const Layout: VFC<Props> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { children, ...headerProps } = props;

  return (
    <div className="pb-20">
      <div
        className="pt-4 pb-1 mx-auto"
        // className={`px-3 pt-4 pb-8 mx-auto sm:px-4 sm:pb-14 ${
        //   isHeaderNarrow ? "max-w-screen-sm" : "max-w-screen-lg"
        // }`}
      >
        <Header {...headerProps} />
      </div>
      <div className="flex bg-gray-100 min-h-screen w-screen">
        <aside className="bg-white w-60 h-screen sticky top-0">
          <div className="flex items-center justify-center mt-10">
            {/* <a href="/">Application</a> */}
            <p>aaaa</p>
          </div>
          <nav className="mt-10">
            <Sidebar />
          </nav>
        </aside>
        <main className="w-full">{children}</main>
      </div>
      <footer>
        <div className="p-8">
          <div className="text-gray-600 text-center">
            <p>Tech.Uni org.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
