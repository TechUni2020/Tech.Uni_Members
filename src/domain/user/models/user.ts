export class User {
  uid: number;
  name: string;
  bio: string;
  knowAs: string;
  githubId: string;
  instagramId: string;
  twitterId: string;
  profilePicture: string;

  constructor(uid: number, name: string, bio: string, knowAs: string, githubId: string, instagramId: string, twitterId: string, profilePicture: string) {
    this.uid = uid;
    this.name = name;
    this.bio = bio;
    this.knowAs = knowAs;
    this.githubId = githubId;
    this.instagramId = instagramId;
    this.twitterId = twitterId;
    this.profilePicture = profilePicture;
  }

  static fromJSON(json: any): User {
    return new User(json.uid, json.name, json.bio, json.knowAs, json.githubId, json.instagramId, json.twitterId, json.profilePicture);
  }
}