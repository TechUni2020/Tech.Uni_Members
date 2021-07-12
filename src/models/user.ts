import type { UserPutRequest, UserType } from "../types/types";

export const hasName = (
  user: UserPutRequest
): user is UserType | Pick<UserType, "id" | "name"> => {
  return "name" in user;
};

export const hasAvatarUrl = (
  user: UserPutRequest
): user is UserType | Pick<UserType, "id" | "avatarUrl"> => {
  return "avatarUrl" in user;
};

export const EXAMPLE_USER_01: UserType = {
  id: "shouhi",
  name: "翔陽",
  avatarUrl: "/mocks/avatar01.jpg",
  belongs: "開発者",
  role: "代表",
  github: "shouhi",
  twitter: "shouhi_ide",
  instagram: "shouhi_ide",
  discription: "関西学院大学商学部3回生です",
};
