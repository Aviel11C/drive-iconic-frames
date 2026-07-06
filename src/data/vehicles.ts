import mustangAsset from "@/assets/cars/1965-mustang.jpg.asset.json";
import landroverAsset from "@/assets/cars/1990-landrover.jpg.asset.json";
import corvette1960Asset from "@/assets/cars/1960-corvette.jpg.asset.json";
import corvette1954Asset from "@/assets/cars/1954-corvette.jpg.asset.json";
import vespaRedAsset from "@/assets/cars/2016-vespa-red.jpg.asset.json";
import vespaClassicAsset from "@/assets/cars/1962-vespa-150gl.jpg.asset.json";
import truckAsset from "@/assets/cars/1954-chevy-3100.jpg.asset.json";
import mercedesAsset from "@/assets/cars/1962-mercedes-190sl.jpg.asset.json";
import cobraAsset from "@/assets/cars/1986-chevy-cobra.jpg.asset.json";
import chrisCraftAsset from "@/assets/cars/2021-chris-craft.jpg.asset.json";
import rollsAsset from "@/assets/cars/1986-rolls-corniche.jpg.asset.json";
import teslaS1Asset from "@/assets/cars/2025-tesla-model-s-1.jpg.asset.json";
import teslaS2Asset from "@/assets/cars/2025-tesla-model-s-2.jpg.asset.json";
import cybertruckAsset from "@/assets/cars/2025-tesla-cybertruck.jpg.asset.json";
import duffyAsset from "@/assets/cars/2018-duffy-18.jpg.asset.json";
import seadoo1Asset from "@/assets/cars/2025-seadoo-jetski-1.jpg.asset.json";
import seadoo2Asset from "@/assets/cars/2025-seadoo-jetski-2.jpg.asset.json";

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
  images?: string[];
  image?: string;
  availability: "Reservation Only" | "Available" | "Limited";
}

function v(base: Omit<Vehicle, "image"> & { images?: string[] }): Vehicle {
  return { ...base, image: base.images?.[0] };
}

export const vehicles: Vehicle[] = [
  // Vintage Classics
  v({ slug: "1954-corvette", name: "Chevrolet Corvette", year: 1954, category: "Vintage Classics", images: [corvette1954Asset.url], availability: "Reservation Only" }),
  v({ slug: "1960-corvette", name: "Chevrolet Corvette", year: 1960, category: "Vintage Classics", images: [corvette1960Asset.url], availability: "Reservation Only" }),
  v({ slug: "1962-mercedes-190sl", name: "Mercedes 190 SL", year: 1962, category: "Vintage Classics", images: [mercedesAsset.url], availability: "Reservation Only" }),
  v({ slug: "1965-mustang-gt", name: "Mustang GT", year: 1965, category: "Vintage Classics", images: [mustangAsset.url], availability: "Available" }),
  v({ slug: "1954-chevy-3100", name: "Chevrolet 3100 Truck", year: 1954, category: "Vintage Classics", images: [truckAsset.url], availability: "Available" }),
  v({ slug: "1986-chevy-cobra", name: "Chevrolet Cobra", year: 1986, category: "Vintage Classics", images: [cobraAsset.url], availability: "Limited" }),

  // Luxury Vehicles
  v({ slug: "1986-rolls-corniche", name: "Rolls-Royce Corniche", year: 1986, category: "Luxury Vehicles", images: [rollsAsset.url], availability: "Reservation Only" }),
  v({ slug: "1990-land-rover", name: "Land Rover Defender", year: 1990, category: "Luxury Vehicles", images: [landroverAsset.url], availability: "Available" }),

  // Electric Modern
  v({ slug: "2025-tesla-model-s-1", name: "Tesla Model S", year: 2025, category: "Electric Modern", images: [teslaS1Asset.url], availability: "Available" }),
  v({ slug: "2025-tesla-model-s-2", name: "Tesla Model S", year: 2025, category: "Electric Modern", images: [teslaS2Asset.url], availability: "Available" }),
  v({ slug: "2025-tesla-cybertruck", name: "Tesla Cybertruck", year: 2025, category: "Electric Modern", images: [cybertruckAsset.url], availability: "Limited" }),

  // Motorcycles & Vespas
  v({ slug: "2016-vespa-red", name: "Red Vespa", year: 2016, category: "Motorcycles & Vespas", images: [vespaRedAsset.url], availability: "Available" }),
  v({ slug: "1962-piaggio-vespa-150gl", name: "Piaggio Vespa 150 GL", year: 1962, category: "Motorcycles & Vespas", images: [vespaClassicAsset.url], availability: "Reservation Only" }),

  // Boats & Watercraft
  v({ slug: "2021-chris-craft-center-console", name: "Chris-Craft Center Console", year: 2021, category: "Boats & Watercraft", images: [chrisCraftAsset.url], availability: "Reservation Only" }),
  v({ slug: "2018-duffy-18", name: "Duffy 18ft Electric", year: 2018, category: "Boats & Watercraft", images: [duffyAsset.url], availability: "Available" }),
  v({ slug: "2025-seadoo-jetski-1", name: "Sea-Doo Jet Ski", year: 2025, category: "Boats & Watercraft", images: [seadoo1Asset.url], availability: "Available" }),
  v({ slug: "2025-seadoo-jetski-2", name: "Sea-Doo Jet Ski", year: 2025, category: "Boats & Watercraft", images: [seadoo2Asset.url], availability: "Available" }),
];

export const categories: VehicleCategory[] = [
  "Vintage Classics",
  "Luxury Vehicles",
  "Electric Modern",
  "Motorcycles & Vespas",
  "Boats & Watercraft",
];
