export interface MenuContainer {
  home: string;
  iconsClass: string;
  routerLinkUrl?: string;
  categories?: Category[];
}

export interface Category {
  title: string;
  iconsClass?: string;
  items: MenuItem[];
}

export interface MenuItem {
  title: string;
  iconsClass: string;
  routerLinkUrl?: string;
  menuItemChildrens?: MenuItemChildren[];
}

export interface MenuItemChildren {
  title: string;
  iconsClass: string;
  routerLinkUrl?: string;
}
