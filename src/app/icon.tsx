import { brandIcon } from "@/lib/brand-icon";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default function Icon() {
  return brandIcon(256);
}
