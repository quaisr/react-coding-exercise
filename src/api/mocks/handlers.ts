import { http, HttpResponse } from "msw";

const AUTHOR = "user@example.com";
const LATENCY = 1000;

import type { IComment, IPostComment } from "../api";
import { COMMENTS } from "../data";

export const handlers = [
  // Handler for fetching comments
  http.get<{}, {}, IComment[]>("/api/comments", async () => {
    // Return a deep copy of the fake data so it can't be modified by accident
    await new Promise((resolve) => setTimeout(resolve, LATENCY));
    return HttpResponse.json(JSON.parse(JSON.stringify(COMMENTS)));
  }),

  // Handler for posting a new comment
  http.post<{}, IPostComment, {}, "/api/comments">(
    "/api/comments",
    async ({ request }) => {
      const { id, parentCommentId, content } = await request.json();
      const timestamp = new Date().toISOString();

      // Fake server changes
      COMMENTS.push({
        id,
        parentCommentId,
        content,
        timestamp,
        author: AUTHOR,
      });

      await new Promise((resolve) => setTimeout(resolve, LATENCY));
      return HttpResponse.json({}, { status: 201 });
    }
  ),
];
