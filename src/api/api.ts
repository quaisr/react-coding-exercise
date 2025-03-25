export interface IComment {
  id: string;
  parentCommentId: string | null;
  author: string;
  content: string;
  timestamp: string;
}

export interface IPostComment {
  id: string;
  parentCommentId: string | null;
  content: string;
}

/**
 * Fetches all comments from the /api/comments endpoint.
 * @returns A promise that resolves to an array of comments.
 */
export const getComments = async (): Promise<IComment[]> => {
  const response = await fetch("/api/comments");
  if (!response.ok) {
    throw new Error(`Failed to fetch comments: ${response.statusText}`);
  }
  return response.json();
};

/**
 * Posts a new comment to the /api/comments endpoint.
 * @param newComment - The comment to be posted.
 * @returns A promise that resolves when the comment is successfully posted.
 */
export const postComment = async (newComment: IPostComment): Promise<void> => {
  const response = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newComment),
  });

  if (!response.ok) {
    throw new Error(`Failed to post comment: ${response.statusText}`);
  }
};
