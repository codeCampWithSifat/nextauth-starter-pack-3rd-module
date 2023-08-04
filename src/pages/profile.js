import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Head from "next/head";
import { useSession } from "next-auth/react";
const ProfilePage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <Head>
        <title>Next Profile </title>
      </Head>
      <Avatar size={64} icon={<UserOutlined />} />
      <h1>User Profile: {session?.user?.name}</h1>
      <h1>User Email: {session?.user?.email}</h1>
    </div>
  );
};

export default ProfilePage;
