import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <Link
        to="/posts"
      >
        Blog Posts
      </Link>
    </div>
  );
}
