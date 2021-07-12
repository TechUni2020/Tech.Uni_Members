export type UserType = {
  id: string;
  name: string;
  avatarUrl: string;
  class: string;
  role: string;
  github: string;
  twitter: string;
  instagram: string;
  discription: string;
};

export type UserPutRequest =
  | UserType
  | Pick<UserType, "id" | "name">
  | Pick<UserType, "id" | "avatarUrl">
  | Pick<UserType, "id" | "class">
  | Pick<UserType, "id" | "role">
  | Pick<UserType, "id" | "github">
  | Pick<UserType, "id" | "twitter">
  | Pick<UserType, "id" | "instagram">
  | Pick<UserType, "id" | "discription">;
