import { FunctionComponent } from 'react';
import type { DocumentCatalogItem } from '../types';
import DocumentCatalogCard from './DocumentCatalogCard';
import DocumentsSearchToolbar from './DocumentsSearchToolbar';

interface DocumentsCatalogSectionProps {
  items: DocumentCatalogItem[];
  search: string;
  onSearchChange: (value: string) => void;
}

const DocumentsCatalogSection: FunctionComponent<DocumentsCatalogSectionProps> = ({
  items,
  search,
  onSearchChange,
}) => (
  <section className="min-w-0 space-y-4 sm:space-y-5" aria-labelledby="documents-catalog-heading">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
      <div className="min-w-0">
        <h2
          id="documents-catalog-heading"
          className="m-0 text-lg font-semibold leading-7 text-[#101828] sm:text-xl"
        >
          Catalogue de Documents
        </h2>
        <p className="mt-1 text-sm leading-6 text-[#717182] sm:text-base">
          Sélectionnez le document que vous souhaitez demander
        </p>
      </div>
      <DocumentsSearchToolbar search={search} onSearchChange={onSearchChange} />
    </div>

    {items.length === 0 ? (
      <p className="rounded-[14px] border border-[rgba(0,0,0,0.08)] bg-white py-12 text-center text-sm font-medium text-[#717182]">
        Aucun document ne correspond à votre recherche.
      </p>
    ) : (
      <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
        {items.map((item) => (
          <DocumentCatalogCard
            key={item.id}
            item={item}
            onRequest={(id) => console.log('Demander document', id)}
          />
        ))}
      </div>
    )}
  </section>
);

export default DocumentsCatalogSection;
