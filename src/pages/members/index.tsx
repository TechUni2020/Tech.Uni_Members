/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { GithubIcon } from "../../components/Icon/GithubIcon"
import { InstagramIcon } from "../../components/Icon/InstagramIcon"
import { TwitterIcon } from "../../components/Icon/TwitterIcon"
import ExectiveMembersCard from "../../components/shared/ExectiveUser"
import { Layout } from "../../components/shared/Layout"
import MembersCard from "../../components/shared/UserCard"
import { User } from "../../domain/user/models/user"
import { UserRepository } from "../../domain/user/user_repository"

const Members: NextPage = () => {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [executiveMembers, setExecutiveMembers] = useState([])

  let users: User[] = [];
  let executiveUsers: User[] = [];
  useEffect(() => {
    (async () => { 
      users = await new UserRepository().getMembers()
      setMembers(users);
      executiveUsers = await new UserRepository().getExecutiveMembers()
      setExecutiveMembers(executiveUsers);
    })()
  }, [])

  return (
    <>
      <Layout>
        <h1 className="m-10 text-3xl font-bold">メンバー一覧</h1>
        <h2 className="m-10 text-xl font-bold">運営メンバー</h2>
        <ExectiveMembersCard exectiveMembers={executiveMembers} />
        <h2 className="m-10 text-xl font-bold">メンバー</h2>
        <MembersCard members={members} />
      </Layout>
    </>
  );
};

export default Members;
