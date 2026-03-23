import { Event } from "@/types/event";

export type CreateEventDto = {
  title: string;
  description?: string;
  startDate: string;
  location?: string;
  category?: string;
};

//const BASE_URL = http://localhost:5278/api/Event;

export async function getEvents(): Promise<Event[]> {
  const response = await fetch("http://localhost:5278/api/Event")
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
}

export async function createEvent(data: CreateEventDto): Promise<Event> {
  const response = await fetch("http://localhost:5278/api/Event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create event");
  }

  return response.json();
}

export async function deleteEvent(id:number) {
  const response = await fetch(`http://localhost:5278/api/Event/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to delete event");
}

