import React from 'react';

type SidebarProps = {
  children: React.ReactNode;
};

type SidebarTopProps = {
  children: React.ReactNode;
};

function Sidebar({ children }: SidebarProps) {
  return <div className="sidebar">{children}</div>;
}

export function SidebarTop({ children }: SidebarTopProps) {
  return <div className="sidebar__top">{children}</div>;
}

export default Sidebar;
