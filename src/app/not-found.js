import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>Could not find requested resource :d</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
