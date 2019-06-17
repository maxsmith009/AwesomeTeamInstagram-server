export interface IPost {
  id: number;
  profileId: number;
  imageUrl: string;
}

export interface Profile {
  id: number;
  userName: string;
  password: string;
  email: string;
  displayName: string;
  description: string;
  avatar: string;
}

export interface Comment {
  id: number;
  postId: number;
  text: string;
}
