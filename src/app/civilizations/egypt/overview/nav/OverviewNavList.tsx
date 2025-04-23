import NavItem from "./NavItem";

export default function OverviewNavList() {
  return (
    <ol className="list-decimal list-inside text-gray-300 w-fit">
      <NavItem href="#history">History</NavItem>
      <NavItem href="#geography">Geography</NavItem>
      <NavItem href="#politics">Politics</NavItem>
      <NavItem href="#economy">Economy</NavItem>
      <NavItem href="#demographics">Demographics</NavItem>
      <NavItem href="#culture">Culture</NavItem>
    </ol>
  );
}
