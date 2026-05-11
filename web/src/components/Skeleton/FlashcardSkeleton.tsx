export function FlashcardSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="h-6 w-24 rounded-full bg-slate-200" />

        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-slate-200" />
          <div className="h-8 w-8 rounded-full bg-slate-200" />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="h-5 w-3/4 rounded bg-slate-200" />

        <div className="h-4 w-full rounded bg-slate-200" />

        <div className="h-4 w-5/6 rounded bg-slate-200" />
      </div>

      <div className="mt-8 space-y-3">
        <div className="h-4 w-full rounded bg-slate-200" />

        <div className="h-4 w-4/5 rounded bg-slate-200" />

        <div className="h-4 w-3/4 rounded bg-slate-200" />
      </div>
    </div>
  );
}
