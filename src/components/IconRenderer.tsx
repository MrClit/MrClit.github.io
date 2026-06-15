import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';
import * as TbIcons from 'react-icons/tb';
import type { IconBaseProps, IconType } from 'react-icons';

const iconPacks: Record<string, Record<string, IconType>> = {
  si: SiIcons,
  fa: FaIcons,
  di: DiIcons,
  tb: TbIcons,
};

export function IconRenderer({
  lib,
  icon,
  ...props
}: { lib: string; icon: string } & IconBaseProps) {
  const IconComponent = iconPacks[lib]?.[icon];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
}
