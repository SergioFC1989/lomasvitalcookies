"use client";

import { Link } from "@heroui/link";
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import NextLink from "next/link";
import { useState } from "react";

import { InstagramIcon, Logo } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderNavItems = () =>
    siteConfig.items.map((item) => (
      <NavbarItem key={item.href}>
        <NextLink
          className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium")}
          color="foreground"
          href={item.href}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </NextLink>
      </NavbarItem>
    ));

  return (
    <HeroUINavbar className="py-2" position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit hidden md:block">Lo Más Vital</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-4 justify-start ml-2">{renderNavItems()}</ul>
      </NavbarContent>
      <NavbarContent className="basis-1 pl-4" justify="end">
        <NavbarItem>
          <Link
            isExternal
            aria-label="Instagram"
            className="flex flex-col items-center-safe transition-opacity hover:color-red-500 hover:opacity-80"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        <ThemeSwitch />
        <NavbarMenuToggle className="md:hidden" />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col py-4 gap-3">{renderNavItems()}</div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
