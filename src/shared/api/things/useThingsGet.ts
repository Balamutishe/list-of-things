import { useQuery } from "@tanstack/react-query";
import instance from "../instance";

export const useThingsGet = (query?: string) => {
  return useQuery({
    queryKey: ["things", query],
    queryFn: async () => {
      const response = await instance.get(
        `/things${query ? `?name_like=${query}` : ""}`,
      );

      if (!response.statusText || response.statusText !== "OK") {
        throw new Error("Network response was not ok");
      }

      return response.data;
    },
  });
};
