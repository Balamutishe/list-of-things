import type { Thing } from "@shared/types/things";

export const CardThing = ({ thing }: { thing: Thing }) => {
  return (
    <div>
      <span className="font-semibold">{thing.name}</span>
      <br />
      <small className="text-gray-500">
        Created at: {thing.createdAt.toLocaleString()}
      </small>
    </div>
  );
};
