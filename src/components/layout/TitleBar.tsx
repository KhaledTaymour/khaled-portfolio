export function TitleBar() {
  return (
    <div className="flex h-10 w-full items-center shrink-0 border-b border-border-dim bg-elevated px-4 select-none">
      {/* macOS traffic light buttons */}
      <div className="flex items-center gap-2 mr-4">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
      </div>
      <span className="text-xs font-code text-faded-slate mx-auto">
        KhaledTaymour — The Code Canvas
      </span>
    </div>
  )
}
