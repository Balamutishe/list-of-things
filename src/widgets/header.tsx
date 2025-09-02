import { ThingAdd } from "@features/things/thingAdd";
import { ThingsSearch } from "@features/things/thingsSearch";

export default function Header() {
  return (
    <header className="bg-gray-800/50 p-4 text-white">
      <div className="mx-auto my-0 flex max-w-[1440px] items-center justify-between">
        <ThingsSearch />
        <ThingAdd />
      </div>
    </header>
  );
}
