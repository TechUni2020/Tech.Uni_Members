export class User {
  uid: number;
  name: string;
  nickName: string;
  bio: string;
  githubId: string;
  instagramId: string;
  twitterId: string;
  qiitaId: string;
  profileImage: string;
  role: string;
  university: string;
  major: string;
  grade: string;
  engineerType: string;

  constructor(uid: number, name: string, bio: string,  githubId: string, instagramId: string, twitterId: string, qiitaId: string, profileImage: string, role: string, university: string, major: string, grade: string, engineerType: string) {
    this.uid = uid;
    this.name = name;
    this.bio = bio;
    this.githubId = githubId;
    this.instagramId = instagramId;
    this.twitterId = twitterId;
    this.qiitaId = qiitaId;
    this.profileImage = profileImage;
    this.role = role;
    this.university = university;
    this.major = major;
    this.grade = grade;
    this.engineerType = engineerType;
  }

  static fromJSON(json: any): User {
    return new User(json.uid, json.name, json.bio, json.githubId, json.instagramId, json.twitterId, json.qiitaId, json.profileImage, json.role, json.university, json.major, json.grade, json.engineerType);
  }
}