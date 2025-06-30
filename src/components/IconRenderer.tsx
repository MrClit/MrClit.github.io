import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as TbIcons from "react-icons/tb";

const iconPacks: Record<string, any> = {
  si: SiIcons,
  fa: FaIcons,
  di: DiIcons,
  tb: TbIcons,
};

export function IconRenderer({ lib, icon, ...props }: { lib: string; icon: string; [key: string]: any }) {
  const IconComponent = iconPacks[lib]?.[icon];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}