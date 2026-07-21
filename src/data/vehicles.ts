import mustangImg from "@/assets/cars/1965-mustang.jpg";
import landroverImg from "@/assets/cars/1990-landrover.jpg";
import corvette1960Img from "@/assets/cars/1960-corvette.jpg";
import corvette1960Img2 from "@/assets/cars/1960-corvette-2.jpg";
import corvette1954Img from "@/assets/cars/1954-corvette.jpg";
import vespaRedImg from "@/assets/cars/2016-vespa-red.jpg";
import vespaClassicImg from "@/assets/cars/1962-vespa-150gl.jpg";
import truckImg from "@/assets/cars/1954-chevy-3100.jpg";
import mercedesImg from "@/assets/cars/1962-mercedes-190sl.jpg";
import cobraImg from "@/assets/cars/1986-chevy-cobra.jpg";
import chrisCraftImg from "@/assets/cars/2021-chris-craft.jpg";
import rollsImg from "@/assets/cars/1986-rolls-corniche.jpg";
import teslaS1Img from "@/assets/cars/2025-tesla-model-s-1.jpg";
import teslaS2Img from "@/assets/cars/2025-tesla-model-s-2.jpg";
import cybertruckImg from "@/assets/cars/2025-tesla-cybertruck.jpg";
import duffyImg from "@/assets/cars/2018-duffy-18.jpg";
import seadoo1Img from "@/assets/cars/2025-seadoo-jetski-1.jpg";
import seadoo2Img from "@/assets/cars/2025-seadoo-jetski-2.jpg";

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
  v({ slug: "1954-corvette", name: "Chevrolet Corvette", year: 1954, category: "Vintage Classics", images: [corvette1954Img], availability: "Reservation Only" }),
  v({ slug: "1960-corvette", name: "Chevrolet Corvette", year: 1960, category: "Vintage Classics", images: [corvette1960Img, corvette1960Img2], availability: "Reservation Only" }),
  v({ slug: "1962-mercedes-190sl", name: "Mercedes 190 SL", year: 1962, category: "Vintage Classics", images: [mercedesImg], availability: "Reservation Only" }),
  v({ slug: "1965-mustang-gt", name: "Mustang GT", year: 1965, category: "Vintage Classics", images: [mustangImg], availability: "Available" }),
  v({ slug: "1954-chevy-3100", name: "Chevrolet 3100 Truck", year: 1954, category: "Vintage Classics", images: [truckImg], availability: "Available" }),
  v({ slug: "1986-chevy-cobra", name: "Chevrolet Cobra", year: 1986, category: "Vintage Classics", images: [cobraImg], availability: "Limited" }),

  // Luxury Vehicles
  v({ slug: "1986-rolls-corniche", name: "Rolls-Royce Corniche", year: 1986, category: "Luxury Vehicles", images: [rollsImg], availability: "Reservation Only" }),
  v({ slug: "1990-land-rover", name: "Land Rover Defender", year: 1990, category: "Luxury Vehicles", images: [landroverImg], availability: "Available" }),

  // Electric Modern
  v({ slug: "2025-tesla-model-s-1", name: "Tesla Model S", year: 2025, category: "Electric Modern", images: [teslaS1Img], availability: "Available" }),
  v({ slug: "2025-tesla-model-s-2", name: "Tesla Model S", year: 2025, category: "Electric Modern", images: [teslaS2Img], availability: "Available" }),
  v({ slug: "2025-tesla-cybertruck", name: "Tesla Cybertruck", year: 2025, category: "Electric Modern", images: [cybertruckImg], availability: "Limited" }),

  // Motorcycles & Vespas
  v({ slug: "2016-vespa-red", name: "Red Vespa", year: 2016, category: "Motorcycles & Vespas", images: [vespaRedImg], availability: "Available" }),
  v({ slug: "1962-piaggio-vespa-150gl", name: "Piaggio Vespa 150 GL", year: 1962, category: "Motorcycles & Vespas", images: [vespaClassicImg], availability: "Reservation Only" }),

  // Boats & Watercraft
  v({ slug: "2021-chris-craft-center-console", name: "Chris-Craft Center Console", year: 2021, category: "Boats & Watercraft", images: [chrisCraftImg], availability: "Reservation Only" }),
  v({ slug: "2018-duffy-18", name: "Duffy 18ft Electric", year: 2018, category: "Boats & Watercraft", images: [duffyImg], availability: "Available" }),
  v({ slug: "2025-seadoo-jetski-1", name: "Sea-Doo Jet Ski", year: 2025, category: "Boats & Watercraft", images: [seadoo1Img], availability: "Available" }),
  v({ slug: "2025-seadoo-jetski-2", name: "Sea-Doo Jet Ski", year: 2025, category: "Boats & Watercraft", images: [seadoo2Img], availability: "Available" }),
];

export const categories: VehicleCategory[] = [
  "Vintage Classics",
  "Luxury Vehicles",
  "Electric Modern",
  "Motorcycles & Vespas",
  "Boats & Watercraft",
];
