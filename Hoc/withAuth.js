import { useRouter } from "next/router";
import { useEffect } from "react";
function WithAuth({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      router.push("/login");
    }
  }, [router]);
  return <>{children}</>;
}

export default WithAuth;
