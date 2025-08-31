import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "../instance";

export const useThingDelete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await instance.delete(`/things/${id}`);
      return response.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["things"] }),
    onError: (error) => {
      console.error("Error deleted thing:", error);
    },
  });
};
