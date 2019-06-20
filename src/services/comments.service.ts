import { Inject, Injectable } from '@nestjs/common';
import { Comment } from '../entities/comment.entity';
import { CommentDto } from '../entities/dto/comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @Inject('COMMENT_REPOSITORY') private readonly COMMENT_REPOSITORY: typeof Comment,
  ) {}

  async getCommentsByPostId(idOfPost: number): Promise<Comment[]> {
    return await this.COMMENT_REPOSITORY.findAll({
      where: {
        postId: idOfPost,
      },
    });
  }

  async createComment(postId: number, commentDto: CommentDto) {
    const newComment = new Comment();
    newComment.postId = postId;
    newComment.profileId = commentDto.profileId;
    newComment.text = commentDto.text;

    return await newComment.save();
  }

  async deleteComment(commentId: number) {
    return await this.COMMENT_REPOSITORY.destroy({
      where: {
        id: commentId,
      },
    });
  }

  async deleteCommentsOfPost(idOfPost: number) {
    return await this.COMMENT_REPOSITORY.destroy({
      where: {
        postId: idOfPost,
      },
    });
  }
}
