import { FunctionComponent, useMemo, useState } from 'react';
import { Check, Download, FilePenLine, FileUp, X, AlertTriangle } from 'lucide-react';
import AdminModuleHistory from '../../../shared/admin-module-history/AdminModuleHistory';
import type { AdminHistoryRowDisplay } from '../../../shared/admin-module-history/adminHistoryTypes';
import {
  DocumentsTimelineRow,
  DocumentsTimelineStatus,
  documentsHistorySeed,
} from '../data/documentsHistoryMock';

function statusLabel(s: DocumentsTimelineStatus): string {
  switch (s) {
    case 'document_uploaded':
      return 'Uploaded document';
    case 'document_validated':
      return 'Validated document';
    case 'document_rejected':
      return 'Rejected document';
    case 'correction_requested':
      return 'Requested correction';
    case 'document_downloaded':
      return 'Downloaded document';
    default:
      return s;
  }
}

function badgeClass(s: DocumentsTimelineStatus): string {
  switch (s) {
    case 'document_validated':
      return 'bg-honeydew text-seagreen';
    case 'document_rejected':
      return 'bg-mistyrose text-firebrick';
    case 'document_uploaded':
      return 'bg-lavender-200 text-slateblue';
    case 'correction_requested':
      return 'bg-papayawhip text-darkorchid';
    case 'document_downloaded':
      return 'bg-lavender-100 text-darkorchid';
    default:
      return 'bg-gainsboro text-dimgray';
  }
}

function circleClass(s: DocumentsTimelineStatus): string {
  switch (s) {
    case 'document_validated':
      return 'bg-honeydew';
    case 'document_rejected':
      return 'bg-mistyrose';
    case 'document_uploaded':
      return 'bg-lavender-200';
    case 'correction_requested':
      return 'bg-papayawhip';
    case 'document_downloaded':
      return 'bg-lavender-100';
    default:
      return 'bg-gainsboro';
  }
}

function glyph(row: DocumentsTimelineRow) {
  const props = { className: 'h-5 w-5 shrink-0', strokeWidth: 2, 'aria-hidden': true as const };
  switch (row.status) {
    case 'document_uploaded':
      return <FileUp {...props} color="#193cb8" />;
    case 'document_validated':
      return <Check {...props} color="#016630" />;
    case 'document_rejected':
      return <X {...props} color="#9f0712" />;
    case 'correction_requested':
      return <FilePenLine {...props} color="#6e11b0" />;
    case 'document_downloaded':
      return <Download {...props} color="#6e11b0" />;
    default:
      return <AlertTriangle {...props} color="#4a5565" />;
  }
}

function toDisplay(row: DocumentsTimelineRow): AdminHistoryRowDisplay {
  return {
    id: row.id,
    glyph: glyph(row),
    badgeLabel: statusLabel(row.status),
    badgeClassName: badgeClass(row.status),
    circleBgClassName: circleClass(row.status),
    actorName: row.actorName,
    headline: row.headline,
    metaLine: row.fileRef,
    date: row.date,
    time: row.time,
  };
}

const DocumentsHistoryPage: FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [docType, setDocType] = useState('all');
  const [reviewState, setReviewState] = useState('all');

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return documentsHistorySeed.filter((row) => {
      if (docType !== 'all' && row.docType !== docType) return false;
      if (reviewState !== 'all' && row.reviewState !== reviewState) return false;
      if (!q) return true;
      return `${row.actorName} ${row.headline} ${row.fileRef}`.toLowerCase().includes(q);
    });
  }, [search, docType, reviewState]);

  return (
    <AdminModuleHistory
      searchValue={search}
      onSearchChange={setSearch}
      filters={[
        {
          ariaLabel: 'Document type',
          placeholderOptionLabel: 'Document type',
          value: docType,
          onChange: setDocType,
          options: [
            { value: 'convention', label: 'Convention' },
            { value: 'attestation', label: 'Attestation' },
            { value: 'financial', label: 'Financial proof' },
            { value: 'other', label: 'Other' },
          ],
        },
        {
          ariaLabel: 'Review state',
          placeholderOptionLabel: 'Review state',
          value: reviewState,
          onChange: setReviewState,
          options: [
            { value: 'pending', label: 'Pending' },
            { value: 'action_required', label: 'Action required' },
            { value: 'cleared', label: 'Cleared' },
          ],
        },
      ]}
      rows={filtered.map(toDisplay)}
    />
  );
};

export default DocumentsHistoryPage;
