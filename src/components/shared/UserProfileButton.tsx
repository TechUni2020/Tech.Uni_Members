/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const UserProfileButton = (props) => {
  return (
    <Link href={"/mypage"} as={"mypage"}>
      <div className="flex flex-row cursor-pointer">
        <img
          src={props.avatarImageUrl}
          alt={props.userDisplayName}
          width={96}
          height={96}
          className="w-24 h-24"
        />
      </div>
    </Link>
  );
};

export default UserProfileButton;
