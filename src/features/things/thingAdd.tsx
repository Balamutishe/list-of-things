import { useThingAdd } from "@shared/api/things/useThingAdd";
import Button from "@shared/ui/button";

export const ThingAdd = () => {
  const thingAdd = useThingAdd();

  const handleAddThing = () => {
    thingAdd.mutate();
  };

  return (
    <Button variant="primary" onClick={handleAddThing}>
      Add Thing
    </Button>
  );
};
