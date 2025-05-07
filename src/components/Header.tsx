import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};

type HeaderTopProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps) {
  return <header className="header">{children}</header>;
}

export function HeaderTop({ children }: HeaderTopProps) {
  return <div className="header__top">{children}</div>;
}

export default Header;
