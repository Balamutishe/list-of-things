import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "../instance";

export const useThingChange = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: string }) => {
      const response = await instance.patch(`/things/${id}`, {
        name: data,
        updatedAt: new Date(),
      });
      return response.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["things"] }),
    onError: (error) => {
      console.error("Error changed thing:", error);
    },
  });
};
