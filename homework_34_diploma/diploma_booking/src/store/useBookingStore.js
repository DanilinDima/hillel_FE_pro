import { create } from "zustand";

export const useBookingStore = create((set) => ({
    destinations: [],
    hotels: [],
    errors: [],
    loading: false,
    bookedSuccess: false,
    fetchDestinations: async () => {
        set({ loading: true });
        try {
            const response = await fetch("http://localhost:3000/destination");
            if (!response.ok) {
                throw new Error("Failed to fetch destinations");
            }
            const data = await response.json();
            set({ destinations: data, loading: false, bookedSuccess: false });
        } catch (error) {
            set({ errors: [error.message], loading: false });
        }
    },


    fetchHotels: async (values) => {
  set({ loading: true, errors: [], bookedSuccess: false });

  try {
    const response = await fetch("http://localhost:3000/hotels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) {

      throw new Error(data.error || "Unknown error occurred");
    }

    set({ hotels: data, loading: false });
  } catch (error) {
    set({ errors: [error.message], hotels: [], loading: false });
  }
},

    bookHotel: async (bookingData) => {
        set({ loading: true ,errors: [] });
        try {
            const response = await fetch("http://localhost:3000/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookingData),
            });
            if (!response.ok) throw new Error("Failed to save booking");
            set({ hotels: [], loading: false, bookedSuccess: true });
        } catch (error) {
            set({ errors: [error.message], loading: false });
        }
    },
    setBookedSuccess: (success) => {
        if (typeof success !== "boolean") {
            throw new Error(
                "Invalid value for bookedSuccess, must be a boolean"
            );
        }
        set({ bookedSuccess: success });
    },
    resetHotels: () => set({ hotels: [] }),
    resetErrors: () => set({ errors: [] }),
}));
