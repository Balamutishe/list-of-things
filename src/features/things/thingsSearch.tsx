import { useSearchStore } from "@app/store/search";

export const ThingsSearch = () => {
  const query = useSearchStore((state) => state.query);
  const setQuery = useSearchStore((state) => state.setQuery);

  return (
    <div className="w-1/3">
      <input
        type="text"
        placeholder="Enter item..."
        className="w-full rounded p-2 outline-2 outline-black"
        defaultValue={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
