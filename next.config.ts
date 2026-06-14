import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Projet isolé : la racine Turbopack est ce dossier (évite que Next remonte
  // au package-lock.json parent du monorepo).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
