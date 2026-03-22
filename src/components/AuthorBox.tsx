import { CategoryIcon } from "@/components/CategoryIcon";

export default function AuthorBox() {
  return (
    <div className="rounded-xl p-6 border border-gray-100 mt-12">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 flex items-center justify-center">
          <CategoryIcon category="start" size="sm" className="!h-16 !w-16" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900 text-sm">OneFoundr</span>
          <span className="text-sm text-gray-500">Solo founder building the playbook for one-person businesses.</span>
          <a href="/about" className="text-xs text-emerald-600 hover:text-emerald-700 mt-1 font-medium">About the author →</a>
        </div>
      </div>
    </div>
  );
}
