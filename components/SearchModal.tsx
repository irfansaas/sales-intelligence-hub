'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl w-full max-w-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Advanced Search</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search everything..."
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
            autoFocus
          />
        </div>
        
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-400">Try searching for:</p>
          <div className="flex flex-wrap gap-2">
            {['Azure costs', 'CIO persona', 'Success stories', 'Competition'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setQuery(suggestion)}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-gray-300"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
