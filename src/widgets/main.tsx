export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 p-4">
      <div className="mx-auto my-0 max-w-[1440px]">{children}</div>
    </main>
  );
}
