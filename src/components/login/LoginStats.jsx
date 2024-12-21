export default function LoginStats() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-8">
          <img src="/logo.svg" alt="" className="w-8 h-8" />
          <h2 className="text-lg font-semibold">AI to Detect & Autofix Bad Code</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-2xl font-bold">30+</div>
            <div className="text-gray-600">Language Support</div>
          </div>
          <div>
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-gray-600">Developers</div>
          </div>
          <div>
            <div className="text-2xl font-bold">100K+</div>
            <div className="text-gray-600">Hours Saved</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-r-transparent" />
          </div>
          <div>
            <div className="text-blue-500 font-medium mb-1">↑ 14%</div>
            <div className="text-gray-500 text-sm">This week</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-gray-600">Issues Fixed</div>
          <div className="text-3xl font-bold">500K+</div>
        </div>
      </div>
    </div>
  );
}