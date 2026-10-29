export interface ResilienceLayer {
  index: string;
  name: string;
  purpose: string;
  architecture: string;
  elements: readonly string[];
  code: string;
}

export const resilienceLayers: ResilienceLayer[] = [
  {
    index: "01",
    name: "Control Core",
    purpose: "Stability & Decision Backbone",
    architecture: "2 Levels of Safety Architecture",
    elements: ["Redundant Hardware", "Proprietary UAV OS"],
    code: "CTRL",
  },
  {
    index: "02",
    name: "Secure Comms",
    purpose: "Trusted Command & Data Link",
    architecture: "2 Stage Verification Architecture",
    elements: ["Resilient Link Hardware", "Authentication Firmware"],
    code: "COMMS",
  },
  {
    index: "03",
    name: "Resilient Nav",
    purpose: "Position Integrity Layer",
    architecture: "3 Stage Integrity Check",
    elements: ["Filter", "Select", "Output"],
    code: "NAV",
  },
  {
    index: "04",
    name: "GPS Denied Nav",
    purpose: "Navigation Without GPS",
    architecture: "How It Works",
    elements: ["Onboard CV + AI", "Plug & Play", "Seamless Transition"],
    code: "VIO",
  },
];
