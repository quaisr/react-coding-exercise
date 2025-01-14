import { useQuery } from "@tanstack/react-query";

import * as api from "../api";
import { EuiButtonEmpty } from "@elastic/eui";

import { v4 as uuid4 } from "uuid";
import moment from "moment";

const Comment = ({
  comment,
  refetchComments,
}: {
  comment: api.IComment;
  refetchComments: () => any;
}) => {
  return (
    <div
      style={{
        backgroundColor: "#eee",
        margin: 10,
        padding: 10,
        borderRadius: 8,
        border: "2px solid white",
      }}
    >
      {/* Header (Author and timestamp) */}
      <div>
        <b>{comment.author}</b>{" "}
        <div style={{ display: "inline-block", color: "grey" }}>
          {moment(comment.timestamp).fromNow()}
        </div>
      </div>
      {/* Body */}
      <div>{comment.content}</div>
      {/* Footer */}
      {/* Clicking the Reply button should show a field */}
      <EuiButtonEmpty
        onClick={async () => {
          await api.postComment({
            id: uuid4(),
            parentCommentId: comment.id,
            content: "hey",
          });
          await refetchComments();
        }}
        size="s"
      >
        Reply
      </EuiButtonEmpty>
    </div>
  );
};

export const Comments = () => {
  const commentsQuery = useQuery<api.IComment[]>({
    queryKey: ["comments"],
    queryFn: api.getComments,
  });

  if (commentsQuery.isPending) {
    return <>Loading comments...</>;
  }

  if (commentsQuery.isError) {
    return <>Error loading comments</>;
  }

  return (
    <>
      {commentsQuery.data.map((c) => (
        <Comment
          key={c.id}
          comment={c}
          refetchComments={commentsQuery.refetch}
        />
      ))}
    </>
  );
};
