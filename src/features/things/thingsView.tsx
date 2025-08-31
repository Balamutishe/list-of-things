import { useThingsGet } from "@shared/api/things/useThingsGet";
import ListThings from "@widgets/list";

export const ThingsView = () => {
  const thingsData = useThingsGet();

  if (thingsData.isLoading) {
    return <div>Loading...</div>;
  }

  if (thingsData.isError) {
    return <div>Error loading things: {String(thingsData.error)}</div>;
  }

  return <ListThings data={thingsData.data} />;
};
