import { useQuery } from "@tanstack/react-query";
import instance from "../instance";

export const useThingsGet = () => {
  return useQuery({
    queryKey: ["things"],
    queryFn: async () => {
      const response = await instance.get("/things");

      if (!response.statusText || response.statusText !== "OK") {
        throw new Error("Network response was not ok");
      }

      return response.data;
    },
  });
};
