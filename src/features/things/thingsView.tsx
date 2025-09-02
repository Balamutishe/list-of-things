import { useEffect, useState } from "react";
import { parseISO, format } from "date-fns";

import { useThingsGet } from "@shared/api/things/useThingsGet";
import type { Thing } from "@shared/types/things";
import Button from "@shared/ui/button";
import { ThingDelete } from "./thingDelete";
import { ThingChange } from "./thingChange";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useSearchStore } from "@app/store/search";

export const ThingsView = () => {
  const queryString = useSearchStore((state) => state.query);
  const thingsData = useThingsGet(queryString);

  if (thingsData.isLoading) {
    return <div>Loading...</div>;
  }

  if (thingsData.isError) {
    return <div>Error loading things: {String(thingsData.error)}</div>;
  }

  return (
    <>
      {thingsData.data && thingsData.data.length > 0 ? (
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

export const Date = ({ date }: { date: string }) => {
  const parsedDate = parseISO(date);
  return (
    <time dateTime={date}>{format(parsedDate, "kk:mm:ss, d LLLL yyyy")}</time>
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
        <span className="w-1/4 italic">{thing.name}</span>
      ) : (
        <span className="w-1/4">
          <ThingChange
            id={thing.id}
            name={thing.name}
            setEditMode={setEditMode}
          />
        </span>
      )}
      <small className="w-1/4 text-gray-500">
        Created at: <Date date={thing.createdAt.toLocaleString()} />
      </small>
      <small className="w-1/4 text-gray-500">
        Updated at: <Date date={thing.updatedAt.toLocaleString()} />
      </small>
      <div className="flex w-1/4 justify-end gap-2">
        <Button variant="default" onClick={() => setEditMode(!editMode)}>
          <PencilSquareIcon className="h-5 w-5" />
        </Button>
        <ThingDelete id={thing.id} />
      </div>
    </div>
  );
};
