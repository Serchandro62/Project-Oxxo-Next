'use client';
import { Location } from "@/entities";
import { Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SelectLocation({ locations, store }: { locations: Location[], store: string | string[] | undefined }) {
    const router = useRouter();
    return (
    <Select
      label="Tienda"
      className="w-full rounded-xl text-sm border border-gray-300 bg-white text-gray-600 shadow-sm"
      classNames={{
        mainWrapper: "hover:ring-2 ring-red-300 rounded-xl transition-all"
      }}
      selectedKeys={store ? store: "0"}
      onChange={((e)=> {
        if(e.target.value === "0" || e.target.value === "") {
            router.push(`/dashboard`);
        } else {
            router.push(`/dashboard?store=${e.target.value}`) 
        }
      })}
      listboxProps={{
        className: "rounded-xl border border-gray-200 bg-white shadow-lg",
      }}
      popoverProps={{
        className: "z-50",
      }}
      aria-label="Select location"
      placeholder="Selecciona Una tienda"
    >
      {locations.map((location: Location) => (
        <SelectItem
          key={location.locationId}
          // @ts-ignore
          value={location.locationId}
          className="cursor-pointer px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
        >
          {location.locationName}
        </SelectItem>
      ))}
    </Select>
  );
}
