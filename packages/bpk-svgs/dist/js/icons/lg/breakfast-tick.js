import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M16 2a2 2 0 0 1 2 2v.5c0 .276.225.497.499.53a4 4 0 0 1 0 7.94c-.274.033-.499.254-.499.53V16a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h8zm2.495 8.938a2 2 0 0 0 0-3.876c-.268-.068-.495.162-.495.438v3c0 .276.227.506.495.438zm-2.788-2.23a1 1 0 0 0-1.414-1.415L11 10.586 9.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4zM4 21a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" /></svg>);