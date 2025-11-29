import ThemeToggle from "../components/theme/ThemeToggle";


export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen w-[70%] mx-auto ">
        <div className="text-[var(--color-primary)]">
          <h1> The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
            ⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
            We detected multiple lockfiles and selected the directory of C:\Users\BG\package-lock.json as the root directory.
            To silence this warning, set `turbopack.root` in your Next.js config, or consider removing one of the lockfiles if  not needed.
            See  for more information.
            Detected additional lockfiles:
            * C:\Users\BG\Desktop\portfolio\package-lock.json</h1>


        </div>
        <p className="text-[var(--color-primary)] ">
          This is primary color text
        </p>
        <ThemeToggle />
      </div>
    </>
  );
}
