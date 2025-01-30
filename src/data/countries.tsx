interface Country {
  id: string;
  name: string;
  available: boolean;
}

const countries: Record<string, Country> = {
  US: { id: "US", name: "United States", available: true },
  GB: { id: "GB", name: "United Kingdom", available: true },
  FR: { id: "FR", name: "France", available: true },
  DE: { id: "DE", name: "Germany", available: true },
  ES: { id: "ES", name: "Spain", available: true },
  IT: { id: "IT", name: "Italy", available: true },
  JP: { id: "JP", name: "Japan", available: true },
  AU: { id: "AU", name: "Australia", available: true },
  CA: { id: "CA", name: "Canada", available: true },
  NZ: { id: "NZ", name: "New Zealand", available: true },
  BR: { id: "BR", name: "Brazil", available: true },
  MX: { id: "MX", name: "Mexico", available: true },
  AR: { id: "AR", name: "Argentina", available: true },
  CL: { id: "CL", name: "Chile", available: true },
};

export default countries;
