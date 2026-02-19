import React from 'react';

interface Tab {
    id: string;
    label: string;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (id: string) => void;
    orientation?: 'horizontal' | 'vertical';
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange, orientation = 'horizontal' }) => {
    return (
        <div
            className={`flex ${orientation === 'vertical' ? 'flex-col space-y-1' : 'flex-row space-x-1 border-b border-theme-accent/50'
                }`}
        >
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`
            px-4 py-2 text-sm font-medium transition-all duration-200 group overflow-hidden relative
            ${orientation === 'horizontal' ? 'border-b-2 -mb-px rounded-t-lg' : 'text-left rounded-lg'}
            ${activeTab === tab.id
                            ? orientation === 'horizontal'
                                ? 'border-theme-highlight text-theme-highlight bg-theme-surface/50'
                                : 'bg-theme-highlight text-theme-bg shadow-md'
                            : 'border-transparent text-theme-text/70 hover:text-theme-text hover:bg-theme-surface/30'
                        }
          `}
                >
                    <span className="relative inline-flex flex-col h-[1.2em] overflow-hidden">
                        {/* Original Text - slides up on hover */}
                        <span className="translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out leading-tight block">
                            {tab.label}
                        </span>
                        {/* Duplicate Text - slides in from below */}
                        <span className="absolute top-full left-0 w-full group-hover:-translate-y-full transition-transform duration-300 ease-in-out leading-tight text-theme-highlight block">
                            {tab.label}
                        </span>
                    </span>
                </button>
            ))}
        </div>
    );
};

export default Tabs;
