import { useEffect, useState } from "react";

import { useThingsGet } from "@shared/api/things/useThingsGet";
import type { Thing } from "@shared/types/things";
import Button from "@shared/ui/button";
import { ThingDelete } from "./thingDelete";
import { ThingChange } from "./thingChange";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export const ThingsView = () => {
  const thingsData = useThingsGet();

  if (thingsData.isLoading) {
    return <div>Loading...</div>;
  }

  if (thingsData.isError) {
    return <div>Error loading things: {String(thingsData.error)}</div>;
  }

  return (
    <>
      {thingsData.data.length > 0 ? (
        thingsData.data.map((thing: Thing) => (
          <li key={thing.id} className="mb-2 border-b-2 border-gray-300 p-2">
            <ThingCard thing={thing} />
          </li>
        ))
      ) : (
        <li>No things available.</li>
      )}
    </>
  );
};

export const ThingCard = ({ thing }: { thing: Thing }) => {
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (thing.name.trim() === "") {
      setEditMode(true);
    }
  }, [thing.name]);

  return (
    <div className="flex items-center justify-between">
      {!editMode ? (
        <span className="w-1/3 italic">{thing.name}</span>
      ) : (
        <span className="w-1/3">
          <ThingChange
            id={thing.id}
            name={thing.name}
            setEditMode={setEditMode}
          />
        </span>
      )}
      <small className="w-1/3 text-gray-500">
        Created at: {thing.createdAt.toLocaleString()}
      </small>
      <div className="flex w-1/3 justify-end gap-2">
        <Button variant="default" onClick={() => setEditMode(!editMode)}>
          <PencilSquareIcon className="h-5 w-5" />
        </Button>
        <ThingDelete id={thing.id} />
      </div>
    </div>
  );
};
