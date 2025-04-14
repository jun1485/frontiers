import React from "react";
import Link from "next/link";

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 mb-8">
      <div className="mb-2 font-bold text-gray-300">Contents</div>
      <ol className="list-decimal list-inside space-y-1 text-cyan-400">
        {items.map((item, index) => (
          <li key={index} className="hover:text-cyan-300 transition-colors">
            <Link href={`#${item.id}`}>{`${item.title}`}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TableOfContents;
