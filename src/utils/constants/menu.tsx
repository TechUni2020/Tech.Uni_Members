import {
  UserIcon,
  UsersIcon,
  PuzzleIcon,
  HomeIcon,
} from "@heroicons/react/solid";

export const GLOBAL_MENUS = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "サービス",
    icon: <PuzzleIcon />,
    link: "/service",
  },
  {
    title: "メンバー",
    icon: <UsersIcon />,
    link: "/members",
  },
  {
    title: "マイページ",
    icon: <UserIcon />,
    link: "/mypage",
  },
] as const;
