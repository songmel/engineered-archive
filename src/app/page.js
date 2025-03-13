import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Image
        className="mb-8"
        src="/banner.JPG"
        alt="banner"
        width={300}
        height={100}
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Hello!</h1>
      <p className="mb-4">
        {`I'm a student aspiring to become a digital circuit designer.
          My interests lie in Computer Architecture, AI, Accelerators, and GPUs.
          I appreciate both the artistic and the engineering aspects of the world—perhaps, I believe, there is no boundary between them. In this fleeting moment of existence on this vast planet, I strive to reconstruct and preserve the knowledge I have gained in its most beautiful and precise form.
          For myself, for you, and for everyone.`}
      </p>
      <div className="my-8">{/* <BlogPosts /> */}</div>
    </section>
  );
}
