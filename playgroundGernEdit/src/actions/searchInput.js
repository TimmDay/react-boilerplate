// ACtion Generator - search term input and search history

// default treu for isQueryCaseSensitive for when a history click happens

export const executeSearchTermInput = ({ currentSearchTerm, isQueryCaseSensitive = true }={}) => ({
    type: 'SEARCH_FOR_TERM',
    currentSearchTerm: currentSearchTerm,
    isQueryCaseSensitive: isQueryCaseSensitive
});