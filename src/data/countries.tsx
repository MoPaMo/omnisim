interface Country {
  id: string;
  name: string;
  available: boolean;
}
//please dont get offended by the selection this si just a demo :)
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
  CN: { id: "CN", name: "China", available: true },
  IN: { id: "IN", name: "India", available: true },
  TH: { id: "TH", name: "Thailand", available: true },
  ID: { id: "ID", name: "Indonesia", available: true },
  DR: { id: "DR", name: "Dominican Republic", available: true },
  EG: { id: "EG", name: "Egypt", available: true },
  GH: { id: "GH", name: "Ghana", available: true },
  RW: { id: "RW", name: "Rwanda", available: true },
  KE: { id: "KE", name: "Kenya", available: true },
  BT: { id: "BT", name: "Bhutan", available: true },
  BW: { id: "BW", name: "Botswana", available: true },
  SE: { id: "SE", name: "Sweden", available: true },
};

export default countries;
