import type { IComment } from "./api";

// Fake server data
export const COMMENTS: IComment[] = [
  {
    id: "1",
    parentCommentId: null,
    author: "alice@example.com",
    content:
      "I've run the first round of our multi-objective optimization on the new car chassis. Stiffness improved by 12%, but the weight climbed by 8%. Let me know if this trade-off is acceptable.",
    timestamp: "2024-12-24T09:00:00.000Z",
  },
  {
    id: "2",
    parentCommentId: null,
    author: "bob@example.com",
    content:
      "Thanks for the update, Alice. If the weight is too high, acceleration and battery range could be impacted. We might need to adjust the material parameters to balance that out.",
    timestamp: "2024-12-24T13:15:00.000Z",
  },
  {
    id: "3",
    parentCommentId: "2",
    author: "charles@example.com",
    content:
      "Bob, I ran a quick follow-up simulation. Reducing the frame thickness by 2 mm only lowers stiffness by 1%, but cuts a noticeable amount of weight. I'll finalize the numbers and share them later today.",
    timestamp: "2024-12-25T10:05:00.000Z",
  },
  {
    id: "4",
    parentCommentId: null,
    author: "diana@example.com",
    content:
      "Just finished testing a lighter alloy in the lab. It meets our strength constraints but doesn't handle cold extremes as well. We need to see if this is a deal-breaker.",
    timestamp: "2024-12-25T15:10:00.000Z",
  },
  {
    id: "5",
    parentCommentId: "1",
    author: "emily@example.com",
    content:
      "Alice, I'm comparing your latest results with our baseline from last quarter. Even with the weight gain, we might be within acceptable specs if the new geometry offers enough aerodynamic benefits.",
    timestamp: "2024-12-26T09:12:00.000Z",
  },
  {
    id: "6",
    parentCommentId: "3",
    author: "frank@example.com",
    content:
      "Charles, could you also run a thermal analysis on that thinner frame? If we see stress hot spots, we’ll need to tweak the design before finalizing any changes.",
    timestamp: "2024-12-26T14:00:00.000Z",
  },
];
