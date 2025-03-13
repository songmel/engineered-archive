import { Posts } from "@/components/posts";

export const metadata = {
  title: "Archive",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Archive</h1>
      <Posts />
    </section>
  );
}
