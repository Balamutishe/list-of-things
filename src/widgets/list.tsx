import type { ThingArray } from "@shared/types/things";
import { CardThing } from "./cardThing";

export default function List({
  title,
  data,
}: {
  title?: string;
  data?: ThingArray | null;
}) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">{title || "List of Things"}</h2>
      <ul>
        {data && data.length > 0 ? (
          data.map((thing) => (
            <li key={thing.id} className="mb-2 border-b-2 border-gray-300 p-2">
              <CardThing thing={thing} />
            </li>
          ))
        ) : (
          <li>No things available.</li>
        )}
      </ul>
    </section>
  );
}
