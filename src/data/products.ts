export interface Product {
  index: string;
  name: string;
  category: string;
  descriptor: string;
  features: readonly string[];
  code: string;
}

export const products: Product[] = [
  {
    index: "01",
    name: "KIBA",
    category: "FPV Kamikaze",
    descriptor: "5″ / 7″ / 10″ / 13″ variants",
    features: ["5 km Kamikaze Range", "1800 TVL RGB Resolution", "640 × 512 Thermal Resolution"],
    code: "FPV",
  },
  {
    index: "02",
    name: "SCOUT",
    category: "AI — ISR Quadcopter",
    descriptor: "Day & Night Object Detection",
    features: ["Swarm Compatible", "Anti-Spoof GPS", "Swappable EO-IR Payload"],
    code: "ISR",
  },
  {
    index: "03",
    name: "BRAWN",
    category: "Heavy Payload Logistics",
    descriptor: "Modular Design",
    features: ["AI Enabled Precision Landing", "Swappable Payload", "Delivery / Winch / Dropping Mechanism"],
    code: "LOG",
  },
  {
    index: "04",
    name: "OMNI",
    category: "Swarm Autonomy Stack",
    descriptor: "TRL 4",
    features: ["Decentralized Coordination", "Resilient Communication", "Edge Autonomy", "Smart Task Allocation"],
    code: "SWARM",
  },
];
