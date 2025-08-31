import { useThingDelete } from "@shared/api/things/useThingDelete";
import Button from "@shared/ui/button";
import { XMarkIcon } from "@heroicons/react/16/solid";

export const ThingDelete = ({ id }: { id: string }) => {
  const thingDelete = useThingDelete();

  const handleDeleteThing = () => {
    thingDelete.mutate(id);
  };

  return (
    <Button variant="danger" onClick={handleDeleteThing}>
      <XMarkIcon className="h-5 w-5" />
    </Button>
  );
};
