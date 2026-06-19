import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleting, isLoading: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),

    onSuccess: (data, bookingId) => {
      toast.success(`Booking #${bookingId} successfully deleted`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while deleting"),
  });
  return { deleting, isDeleting };
}
