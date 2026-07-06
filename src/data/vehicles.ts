import rolls from "@/assets/cars/rolls.jpg";
import tesla from "@/assets/cars/tesla.jpg";
import cybertruck from "@/assets/cars/cybertruck.jpg";
import vespaClassic from "@/assets/cars/vespa.jpg";
import truck from "@/assets/cars/truck.jpg";
import mercedes from "@/assets/cars/mercedes.jpg";

import mustangAsset from "@/assets/cars/1965-mustang.jpg.asset.json";
import landroverAsset from "@/assets/cars/1990-landrover.jpg.asset.json";
import corvette1960Asset from "@/assets/cars/1960-corvette.jpg.asset.json";
import corvette1954Asset from "@/assets/cars/1954-corvette.jpg.asset.json";
import vespaRedAsset from "@/assets/cars/2016-vespa-red.jpg.asset.json";

export type VehicleCategory =
  | "Vintage Classics"
  | "Luxury Vehicles"
  | "Electric Modern"
  | "Motorcycles & Vespas"
  | "Boats & Watercraft";

export interface Vehicle {
  slug: string;
  name: string;
  year: number;
  category: VehicleCategory;
  image?: string;
  availability: "Reservation Only" | "Available" | "Limited";
}

export const vehicles: Vehicle[] = [
  // Vintage Classics
  { slug: "1954-corvette", name: "Chevrolet Corvette", year: 1954, category: "Vintage Classics", image: corvette1954Asset.url, availability: "Reservation Only" },
  { slug: "1960-corvette", name: "Chevrolet Corvette", year: 1960, category: "Vintage Classics", image: corvette1960Asset.url, availability: "Reservation Only" },
  { slug: "1962-mercedes-190sl", name: "Mercedes 190 SL", year: 1962, category: "Vintage Classics", image: mercedes, availability: "Reservation Only" },
  { slug: "1965-mustang-gt", name: "Mustang GT", year: 1965, category: "Vintage Classics", image: mustangAsset.url, availability: "Available" },
  { slug: "1954-chevy-3100", name: "Chevrolet 3100 Truck", year: 1954, category: "Vintage Classics", image: truck, availability: "Available" },
  { slug: "1986-chevy-cobra", name: "Chevrolet Cobra", year: 1986, category: "Vintage Classics", availability: "Limited" },

  // Luxury Vehicles
  { slug: "1986-rolls-corniche", name: "Rolls-Royce Corniche", year: 1986, category: "Luxury Vehicles", image: rolls, availability: "Reservation Only" },
  { slug: "1990-land-rover", name: "Land Rover Defender", year: 1990, category: "Luxury Vehicles", image: landroverAsset.url, availability: "Available" },

  // Electric Modern
  { slug: "2025-tesla-model-s-1", name: "Tesla Model S", year: 2025, category: "Electric Modern", image: tesla, availability: "Available" },
  { slug: "2025-tesla-model-s-2", name: "Tesla Model S", year: 2025, category: "Electric Modern", image: tesla, availability: "Available" },
  { slug: "2025-tesla-cybertruck", name: "Tesla Cybertruck", year: 2025, category: "Electric Modern", image: cybertruck, availability: "Limited" },

  // Motorcycles & Vespas
  { slug: "2016-vespa-red", name: "Red Vespa", year: 2016, category: "Motorcycles & Vespas", image: vespaRedAsset.url, availability: "Available" },
  { slug: "1962-piaggio-vespa-150gl", name: "Piaggio Vespa 150 GL", year: 1962, category: "Motorcycles & Vespas", image: vespaClassic, availability: "Reservation Only" },

  // Boats & Watercraft
  { slug: "2021-chris-craft-center-console", name: "Chris-Craft Center Console", year: 2021, category: "Boats & Watercraft", availability: "Reservation Only" },
  { slug: "2018-duffy-18", name: "Duffy 18ft Electric", year: 2018, category: "Boats & Watercraft", availability: "Available" },
  { slug: "2025-seadoo-jetski-1", name: "Sea-Doo Jet Ski", year: 2025, category: "Boats & Watercraft", availability: "Available" },
  { slug: "2025-seadoo-jetski-2", name: "Sea-Doo Jet Ski", year: 2025, category: "Boats & Watercraft", availability: "Available" },
];

export const categories: VehicleCategory[] = [
  "Vintage Classics",
  "Luxury Vehicles",
  "Electric Modern",
  "Motorcycles & Vespas",
  "Boats & Watercraft",
];
