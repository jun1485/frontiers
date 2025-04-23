export default function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="mb-1">
      <a
        href={href}
        className="hover:text-blue-400 hover:underline cursor-pointer text-sm"
      >
        {children}
      </a>
    </li>
  );
}
