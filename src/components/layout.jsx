import { useEffect } from "react";
function Layout({ children, title, description }) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", description);
  }, [title, description]);

  return <main className="">{children}</main>;
}

export default Layout;
