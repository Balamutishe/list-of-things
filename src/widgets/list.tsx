export default function List({
  title,
  items,
}: {
  title?: string;
  items?: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">{title || "Title not found"}</h2>
      <ul>{items ? items : <li>No items available.</li>}</ul>
    </section>
  );
}
