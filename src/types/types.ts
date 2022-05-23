export type UserType = {
  id: string;
  name: string;
  profilePicture: string;
  role: string;
  githubId: string;
  twitterId: string;
  instagramId: string;
  bio: string;
  department: string
  grade: string
  knownAs: string
  uid: string
  university: string
};

export type UserPutRequest =
  | UserType
  | Pick<UserType, "id" | "name">
  | Pick<UserType, "id" | "profilePicture">
  | Pick<UserType, "id" | "role">
  | Pick<UserType, "id" | "githubId">
  | Pick<UserType, "id" | "twitterId">
  | Pick<UserType, "id" | "instagramId">
  | Pick<UserType, "id" | "bio">
  | Pick<UserType, "id" | "department">
  | Pick<UserType, "id" | "grade">
  | Pick<UserType, "id" | "knownAs">
  | Pick<UserType, "id" | "uid">
  | Pick<UserType, "id" | "university">
