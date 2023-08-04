import { useSession } from "next-auth/react";
import Head from "next/head";
const HomePage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Welcome To Next Auth Home Page
      </h1>
      {session?.user && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h1>User Name : {session?.user?.name}</h1>
          <h1>User Email : {session?.user?.email}</h1>
        </div>
      )}
    </div>
  );
};

export default HomePage;
