## 1. Objective

Goal: Transform a flat list of comments into a **threaded view** that displays:

- **Top-level comments** (`parentCommentId` is null)
- **Nested replies** (with a `parentCommentId`). Replies may be nested an arbitrary number of times.

## 2. Data Structure

Comments follow the `IComment` interface:

```ts
export interface IComment {
  id: string;
  parentCommentId: string | null;
  author: string;
  content: string;
  timestamp: string;
}
```

Top-level comments have `parentCommentId: null`, and replies have `parentCommentId: string`.

## 3. Minimal Wireframe

```text
 ---------------------------------------------------
| Author A (2 hours ago)                            |
| This is a top-level comment.                      |
 ---------------------------------------------------
   | Author B (1 hour ago)                          |
   |   This is a nested reply.                      |
   -------------------------------------------------
     | Author C (a few seconds ago)                 |
     |   This is a doubly-nested reply.             |
     -----------------------------------------------
 ---------------------------------------------------
| Author D (3 hours ago)                            |
|   Another top-level comment.                      |
 ---------------------------------------------------
```

Each **indentation** or **visual offset** represents a reply.

## 4. Implementation Suggestion

You may implement the solution however you want, but one approach is

- change the `Comments` component to render only the top-level comments
- change the `Comment` component so that each comment also renders its children

We are not concerned with an inefficient solution, particularly if you can explain which parts may be inefficient.

## Extensions

### Replies

If you have spare time, you can **extend** the comment UI with a “Reply” button and form:

1. **Reply Button**
   Display a small button (e.g., \"Reply\") under each comment.

2. **Reply Form**
   When clicked, show an inline input area and \"Submit\" button.

3. **Send and refetch the data**
   Post a new comment object with `parentCommentId = comment.id`. Trigger a refetch the comments.

### Sorting

If you have spare time, you can **extend** the comment UI by adding a button to **toggle between newest comments first or oldest comments firsts**.

You may find this snippet helpful to sort in-place an array of objects by the ISO formatted timestamp strings:

```ts
const sortByTimestamp = (objects: { timestamp: string }[]) =>
  objects.sort((a, b) =>
    a.timestamp > b.timestamp ? 1 : b.timestamp > a.timestamp ? -1 : 0
  );
```

---

### Summary

- **Core Task**: Convert a flat comment list into a threaded display with ordering and indentation.
- **Optional Extensions**: Implement a “Reply” feature for interactive nesting, or a button to toggle whether the comments are displayed newest-first or oldest-first.
