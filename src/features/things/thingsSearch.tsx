import { useSearchStore } from "@app/store/search";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const ThingsSearch = () => {
  const query = useSearchStore((state) => state.query);
  const setQuery = useSearchStore((state) => state.setQuery);

  return (
    <div className="relative w-1/3">
      <input
        type="text"
        placeholder="Enter item..."
        className="peer w-full rounded p-2 pl-10 outline-2 outline-black hover:outline-emerald-400 hover:placeholder:text-amber-50 focus:outline-emerald-400 focus:placeholder:text-amber-50"
        defaultValue={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />
      <MagnifyingGlassIcon className="absolute top-1/2 left-2 h-6 w-6 -translate-y-1/2 text-gray-400 peer-hover:text-amber-50 peer-focus:text-(--elem-color)" />{" "}
    </div>
  );
};
