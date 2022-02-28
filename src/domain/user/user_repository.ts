import firebase from "firebase"
import { delBasePath } from "next/dist/next-server/lib/router/router"
import { User } from "./models/user"

export class UserRepository {
  private readonly db = firebase.firestore()

  async getMembers(): Promise<User[]> {
    try {
      const snapshots = await this.db.collection("users").get()
      const list = [] as User[]
      snapshots.docs.forEach(doc => {
        list.push(User.fromJSON(doc.data()))
      });

      return list
    } catch (error) {
      throw error
    }
  }
}