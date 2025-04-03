import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <section>
          <h2 className="text-2xl font-bold mb-4">Understanding Next.js Basics</h2>
          <p className="mb-4">
            This page demonstrates fundamental Next.js concepts. Let's break down the code:
          </p>
          <ol className="list-inside list-decimal text-sm/6 text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
              <strong>Components:</strong> We're creating a functional component called <code>Home</code>.
            </li>
            <li className="mb-2 tracking-[-.01em]">
              <strong>JSX:</strong> The code inside the <code>return</code> statement is JSX, a syntax extension for JavaScript.
            </li>
            <li className="mb-2 tracking-[-.01em]">
              <strong>Next.js Image:</strong> We're using the <code>Image</code> component from <code>next/image</code> for optimized image loading.
            </li>
            <li className="mb-2 tracking-[-.01em]">
              <strong>Tailwind CSS:</strong> We're styling the page with Tailwind CSS utility classes.
            </li>
            <li className="mb-2 tracking-[-.01em]">
              <strong>File-based Routing:</strong> This page is rendered because it's in <code>app/page.tsx</code>, demonstrating Next.js's file-based routing.
            </li>
            <li className="mb-2 tracking-[-.01em]">
              <strong>Dynamic Content:</strong> The text "Piyush vertex changes" can be changed.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Interactive Example</h2>
          <p className="mb-4">
            Try changing the text below and see the changes reflected instantly:
          </p>
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Enter your text here"
            onChange={(e) => {
              // You can add logic here to update the text dynamically
              console.log(e.target.value);
            }}
          />
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now or never
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}