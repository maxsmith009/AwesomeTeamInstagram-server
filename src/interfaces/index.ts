export interface Post {
  id: number;
  profileId: number;
  imageUrl: string;
}


export interface Profile {
  id: number;
  userName: string;
  password: string;
  displayName: string;
  description: string;
  avatar: string;
}

export interface Comment {
  id: number;
  postId: number;
  text: string;
}
