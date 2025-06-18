import type { HollandType } from "../types/hollandcode";

export const careerSuggestions: Record<HollandType, string[]> = {
  Realistic: ["Teknisi Otomotif", "Mekanik", "Petugas Pemadam Kebakaran"],
  Investigative: ["Ilmuwan Data", "Peneliti", "Analis Sistem"],
  Artistic: ["Desainer Grafis", "Seniman", "Penulis"],
  Social: ["Guru", "Konselor", "Pekerja Sosial"],
  Enterprising: ["Pengusaha", "Marketing Manager", "Manajer Penjualan"],
  Conventional: ["Akuntan", "Administrator", "Petugas Arsip"],
};
