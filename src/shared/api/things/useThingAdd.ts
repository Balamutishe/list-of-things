import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "../instance";

export const useThingAdd = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await instance.post("/things", {
        id: crypto.randomUUID(),
        name: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return response.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["things"] }),
    onError: (error) => {
      console.error("Error adding thing:", error);
    },
  });
};
