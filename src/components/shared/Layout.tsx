import type { ReactNode, VFC } from "react";
import type { HeaderProps } from "../layouts/Header";
import { Header } from "../layouts/Header";
import Menubar from "./MenuBar";

type Props = HeaderProps & {
  children: ReactNode;
  // isHeaderNarrow?: boolean;
};

export const Layout: VFC<Props> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { children, ...headerProps } = props;

  return (
    <div>
      <div
        className="pt-4 pb-1 mx-auto"
        // className={`px-3 pt-4 pb-8 mx-auto sm:px-4 sm:pb-14 ${
        //   isHeaderNarrow ? "max-w-screen-sm" : "max-w-screen-lg"
        // }`}
      >
        <Header {...headerProps} />
      </div>
      <div className="flex w-screen">
        <aside className="bg-white sticky top-0">
          <div className="flex items-center justify-center mt-10">
            {/* <a href="/">Application</a> */}
            <p>aaaa</p>
          </div>
          <nav className="mt-10">
            <Menubar />
          </nav>
        </aside>
        <div className="flex-1 flex-col flex-grow">
          <main className="bg-gray-100 min-h-[83vh]">{children}</main>
          <footer className="bg-gray-100">
            <div className="p-8">
              <div className="text-gray-600 text-center">
                <p>Tech.Uni org.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
