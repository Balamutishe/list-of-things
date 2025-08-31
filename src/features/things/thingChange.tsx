import { useThingChange } from "@shared/api/things/useThingChange";
import { useThingDelete } from "@shared/api/things/useThingDelete";
import { useState } from "react";

export const ThingChange = ({
  id,
  name,
  setEditMode,
}: {
  id: string;
  name: string;
  setEditMode: (value: boolean) => void;
}) => {
  const [thingName, setThingName] = useState(name);

  const thingChange = useThingChange();
  const thingDelete = useThingDelete();

  const handleChangeThing = () => {
    if (thingName.trim() === "") thingDelete.mutate(id);

    if (thingName !== name) thingChange.mutate({ id, data: thingName });

    setEditMode(false);
  };

  return (
    <input
      type="text"
      value={thingName}
      onChange={(e) => setThingName(e.target.value)}
      onBlur={handleChangeThing}
      autoFocus={true}
      className="w-full"
      placeholder="Enter thing name"
    />
  );
};
