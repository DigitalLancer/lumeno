import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getEvents, createEvent, deleteEvent } from '@/services/eventService'

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'], // Cache anahtarı
    queryFn: getEvents,
  })
}

export const useAddEvent = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    }
  })
}

export const useDeleteEvent = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => deleteEvent(id),
    onSuccess: () => {
      console.log("succesfully deleted");
      queryClient.invalidateQueries({ queryKey: ['events'] })
    }
  })
}