import {
  createContext,
  useContext,
  useState,
} from "react";

const ItemContext = createContext();

const initialItems = [
  {
    id: 1,
    type: "Lost",
    category: "Phone",
    name: "iPhone 14",
    description:
      "Black iPhone with transparent case.",
    location: "Gandhipuram",
    date: "2026-08-06",
    user: "Demo User",
    status: "Pending",
  },

  {
    id: 2,
    type: "Found",
    category: "Wallet",
    name: "Brown Leather Wallet",
    description:
      "Brown wallet found near bus stop.",
    location: "RS Puram",
    date: "2026-08-07",
    user: "Demo User",
    status: "Pending",
  },

  {
    id: 3,
    type: "Lost",
    category: "ID Card",
    name: "College ID Card",
    description:
      "Student ID card with blue cover.",
    location: "Coimbatore Railway Station",
    date: "2026-08-05",
    user: "Demo User",
    status: "Match Found",
  },
];

export function ItemProvider({ children }) {

  const [items, setItems] = useState(() => {

    const saved =
      localStorage.getItem("reclaimItems");

    return saved
      ? JSON.parse(saved)
      : initialItems;
  });

  const addItem = (item) => {

    const newItem = {
      ...item,
      id: Date.now(),
      status: "Pending",
    };

    const updated = [
      newItem,
      ...items,
    ];

    setItems(updated);

    localStorage.setItem(
      "reclaimItems",
      JSON.stringify(updated)
    );
  };

  const updateStatus = (id, status) => {

    const updated = items.map((item) => {

      if (item.id === id) {

        return {
          ...item,
          status,
        };
      }

      return item;
    });

    setItems(updated);

    localStorage.setItem(
      "reclaimItems",
      JSON.stringify(updated)
    );
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        updateStatus,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
}

export function useItems() {
  return useContext(ItemContext);
}