import { url } from "inspector";
import { useState, useEffect } from "react";

type Item = {
  id: number;
  name: string;
  email: string;
};

const ItemList = (url: URL) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const items = await response.json();
        setItems(items);
      }
    };
    fetchItems();
  }, []);

  return (
    <ul className="text flex flex-col list-disc list-inside dark:bg-slate-800 w-8/12" >
      {items.map((item) => (
        <li key={item.id} className="flex gap-2">
          <p className="font-semibold dark:text-white">{item.id}</p>
          <h3 className="dark:text-slate-200 text-base font-medium tracking-tight">{item.name}</h3>
          <p className="dark:text-slate-400 mt-1 text-sm">{item.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
