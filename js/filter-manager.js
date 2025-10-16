// js/filter-manager.js - Filter and Search Management (Updated with Error Handling)

/**
 * Filter Manager
 * Handles filtering and searching of controls
 */
class FilterManager {
    constructor(uiComponents) {
        this.uiComponents = uiComponents;
        this.filters = {
            search: '',
            category: '',
            status: ''
        };
        this.allControls = [];
        this.lastFilterResultCount = 0;
    }

    /**
     * Initialize filter manager and bind events
     * @param {Array} controls - All available controls
     */
    init(controls) {
        this.allControls = controls;
        this.bindFilterEvents();
        this.applyFilters();
    }

    /**
     * Bind filter control events
     */
    bindFilterEvents() {
        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filters.search = e.target.value;
                this.applyFilters();
            });
        }

        // Category filter
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.addEventListener('change', (e) => {
                this.filters.category = e.target.value;
                this.applyFilters();
            });
        }

        // Status filter
        const statusFilter = document.getElementById('statusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', (e) => {
                this.filters.status = e.target.value;
                this.applyFilters();
            });
        }

        // Bind compliance status change events using event delegation
        document.addEventListener('change', (e) => {
            if (e.target.matches('select[id^="status-"], input[id^="comments-"]')) {
                this.handleComplianceStatusChange(e);
            }
        });
    }

    /**
     * Handle compliance status changes
     * @param {Event} event - Change event
     */
    handleComplianceStatusChange(event) {
        const controlId = event.target.dataset.controlId;
        if (!controlId) return;

        const statusSelect = document.getElementById(`status-${controlId}`);
        const commentsInput = document.getElementById(`comments-${controlId}`);

        if (statusSelect && commentsInput) {
            this.uiComponents.updateComplianceStatus(
                controlId,
                statusSelect.value,
                commentsInput.value
            );

            // Re-apply filters if status filter is active
            if (this.filters.status) {
                this.applyFilters();
            }
        }
    }

    /**
     * Apply all active filters
     */
    applyFilters() {
        let filteredControls = [...this.allControls];

        // Check if we have controls loaded
        if (this.allControls.length === 0) {
            console.warn('No controls loaded yet');
            return;
        }

        // Apply search filter
        if (this.filters.search) {
            filteredControls = this.applySearchFilter(filteredControls, this.filters.search);
        }

        // Apply category filter
        if (this.filters.category) {
            filteredControls = this.applyCategoryFilter(filteredControls, this.filters.category);
        }

        // Apply status filter
        if (this.filters.status) {
            filteredControls = this.applyStatusFilter(filteredControls, this.filters.status);
        }

        // Handle no results scenario
        this.handleFilterResults(filteredControls);

        // Update UI with filtered controls
        this.uiComponents.renderControls(filteredControls);
        this.updateResultsCount(filteredControls.length, this.allControls.length);
        
        // Store last result count for comparison
        this.lastFilterResultCount = filteredControls.length;
    }

    /**
     * Handle filter results and show appropriate messages
     * @param {Array} filteredControls - Filtered controls array
     */
    handleFilterResults(filteredControls) {
        const hasActiveFilters = this.filters.search || this.filters.category || this.filters.status;
        const noResults = filteredControls.length === 0;
        const hadResultsBefore = this.lastFilterResultCount > 0;

        // Only show error if:
        // 1. We have controls loaded
        // 2. User has applied filters
        // 3. No controls match the filters
        if (noResults && hasActiveFilters && this.allControls.length > 0) {
            // Build a helpful message based on active filters
            const activeFilterInfo = this.getActiveFiltersInfo();
            
            if (window.errorHandler) {
                window.errorHandler.showWarning(
                    `No controls match your current filters: ${activeFilterInfo}`,
                    {
                        title: 'No Results Found',
                        duration: 6000,
                        actions: [
                            {
                                label: 'Reset Filters',
                                primary: true,
                                callback: () => {
                                    this.resetFilters();
                                }
                            },
                            {
                                label: 'Clear Search Only',
                                callback: () => {
                                    if (this.filters.search) {
                                        this.filters.search = '';
                                        const searchInput = document.getElementById('searchInput');
                                        if (searchInput) searchInput.value = '';
                                        this.applyFilters();
                                    }
                                }
                            }
                        ]
                    }
                );
            }
        } else if (filteredControls.length > 0 && hadResultsBefore === 0 && hasActiveFilters) {
            // Results found after previously having none - show success
            if (window.errorHandler) {
                window.errorHandler.showSuccess(
                    `Found ${filteredControls.length} control${filteredControls.length === 1 ? '' : 's'}`,
                    {
                        title: 'Results Found',
                        duration: 3000
                    }
                );
            }
        }
    }

    /**
     * Get information about active filters
     * @returns {string} Description of active filters
     */
    getActiveFiltersInfo() {
        const parts = [];
        
        if (this.filters.search) {
            parts.push(`Search: "${this.filters.search}"`);
        }
        
        if (this.filters.category) {
            const categoryLabels = {
                '5': 'Organizational',
                '6': 'People',
                '7': 'Physical',
                '8': 'Technological'
            };
            parts.push(`Category: ${categoryLabels[this.filters.category] || this.filters.category}`);
        }
        
        if (this.filters.status) {
            const statusLabels = {
                'implemented': 'Implemented',
                'partial': 'Partially Implemented',
                'not-implemented': 'Not Implemented',
                'not-applicable': 'Not Applicable'
            };
            parts.push(`Status: ${statusLabels[this.filters.status] || this.filters.status}`);
        }

        return parts.join(', ');
    }

    /**
     * Apply search filter to controls
     * @param {Array} controls - Controls to filter
     * @param {string} searchTerm - Search term
     * @returns {Array} Filtered controls
     */
    applySearchFilter(controls, searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        if (!term) return controls;

        return controls.filter(control => 
            control.id.toLowerCase().includes(term) ||
            control.title.toLowerCase().includes(term) ||
            control.implementation.toLowerCase().includes(term) ||
            control.evidence.toLowerCase().includes(term) ||
            Object.values(control.cloudMappings).some(mapping => 
                mapping && mapping.toLowerCase().includes(term)
            )
        );
    }

    /**
     * Apply category filter to controls
     * @param {Array} controls - Controls to filter
     * @param {string} category - Category to filter by
     * @returns {Array} Filtered controls
     */
    applyCategoryFilter(controls, category) {
        if (!category) return controls;
        return controls.filter(control => control.category === category);
    }

    /**
     * Apply status filter to controls
     * @param {Array} controls - Controls to filter
     * @param {string} status - Status to filter by
     * @returns {Array} Filtered controls
     */
    applyStatusFilter(controls, status) {
        if (!status) return controls;
        
        const complianceStatus = this.uiComponents.getComplianceStatus();
        
        return controls.filter(control => {
            const controlStatus = complianceStatus.get(control.id);
            return controlStatus && controlStatus.status === status;
        });
    }

    /**
     * Update results count display
     * @param {number} filteredCount - Number of filtered results
     * @param {number} totalCount - Total number of controls
     */
    updateResultsCount(filteredCount, totalCount) {
        let countDisplay = document.getElementById('resultsCount');
        
        // Create count display if it doesn't exist
        if (!countDisplay) {
            countDisplay = document.createElement('div');
            countDisplay.id = 'resultsCount';
            countDisplay.style.cssText = `
                text-align: center;
                margin: 20px 0;
                font-size: 14px;
                color: #666;
                font-weight: 500;
            `;
            
            const controlsContainer = document.querySelector('.controls-container');
            if (controlsContainer) {
                controlsContainer.insertBefore(countDisplay, controlsContainer.firstChild);
            }
        }

        // Update count text
        if (filteredCount === totalCount) {
            countDisplay.textContent = `Showing all ${totalCount} controls`;
            countDisplay.style.color = '#666';
        } else if (filteredCount === 0) {
            countDisplay.textContent = `No controls match your filters`;
            countDisplay.style.color = '#e74c3c';
        } else {
            countDisplay.textContent = `Showing ${filteredCount} of ${totalCount} controls`;
            countDisplay.style.color = '#3498db';
        }
    }

    /**
     * Reset all filters
     */
    resetFilters() {
        // Reset filter values
        this.filters = {
            search: '',
            category: '',
            status: ''
        };

        // Reset UI controls
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const statusFilter = document.getElementById('statusFilter');

        if (searchInput) searchInput.value = '';
        if (categoryFilter) categoryFilter.value = '';
        if (statusFilter) statusFilter.value = '';

        // Apply filters (which will show all controls)
        this.applyFilters();

        // Show success message
        if (window.errorHandler) {
            window.errorHandler.showSuccess('Filters reset successfully', {
                duration: 2000
            });
        } else if (this.uiComponents) {
            this.uiComponents.showSuccessMessage('Filters reset successfully');
        }
    }

    /**
     * Get current filter state
     * @returns {Object} Current filters
     */
    getCurrentFilters() {
        return { ...this.filters };
    }

    /**
     * Set filters programmatically
     * @param {Object} newFilters - Filter object
     */
    setFilters(newFilters) {
        this.filters = { ...this.filters, ...newFilters };

        // Update UI controls
        if (newFilters.search !== undefined) {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = newFilters.search;
        }

        if (newFilters.category !== undefined) {
            const categoryFilter = document.getElementById('categoryFilter');
            if (categoryFilter) categoryFilter.value = newFilters.category;
        }

        if (newFilters.status !== undefined) {
            const statusFilter = document.getElementById('statusFilter');
            if (statusFilter) statusFilter.value = newFilters.status;
        }

        this.applyFilters();
    }

    /**
     * Get filtered controls based on current filters
     * @returns {Array} Currently filtered controls
     */
    getFilteredControls() {
        let filteredControls = [...this.allControls];

        if (this.filters.search) {
            filteredControls = this.applySearchFilter(filteredControls, this.filters.search);
        }

        if (this.filters.category) {
            filteredControls = this.applyCategoryFilter(filteredControls, this.filters.category);
        }

        if (this.filters.status) {
            filteredControls = this.applyStatusFilter(filteredControls, this.filters.status);
        }

        return filteredControls;
    }

    /**
     * Update controls data (for when controls are modified)
     * @param {Array} newControls - Updated controls array
     */
    updateControls(newControls) {
        this.allControls = newControls;
        this.applyFilters();
    }

    /**
     * Get search suggestions based on current input
     * @param {string} searchTerm - Current search term
     * @returns {Array} Array of suggestions
     */
    getSearchSuggestions(searchTerm) {
        if (!searchTerm || searchTerm.length < 2) return [];

        const term = searchTerm.toLowerCase();
        const suggestions = new Set();

        this.allControls.forEach(control => {
            // Control IDs
            if (control.id.toLowerCase().includes(term)) {
                suggestions.add(control.id);
            }

            // Control titles (split into words)
            const titleWords = control.title.toLowerCase().split(' ');
            titleWords.forEach(word => {
                if (word.includes(term) && word.length > 2) {
                    suggestions.add(word);
                }
            });

            // Implementation keywords
            const implWords = control.implementation.toLowerCase().split(' ');
            implWords.forEach(word => {
                if (word.includes(term) && word.length > 3) {
                    suggestions.add(word);
                }
            });
        });

        return Array.from(suggestions).slice(0, 10);
    }

    /**
     * Get filter statistics
     * @returns {Object} Statistics about current filters and results
     */
    getFilterStats() {
        const filtered = this.getFilteredControls();
        const total = this.allControls.length;
        
        const categoryStats = {};
        filtered.forEach(control => {
            categoryStats[control.category] = (categoryStats[control.category] || 0) + 1;
        });

        const statusStats = {};
        const complianceStatus = this.uiComponents.getComplianceStatus();
        filtered.forEach(control => {
            const status = complianceStatus.get(control.id);
            const statusKey = status ? status.status || 'unset' : 'unset';
            statusStats[statusKey] = (statusStats[statusKey] || 0) + 1;
        });

        return {
            total,
            filtered: filtered.length,
            categoryStats,
            statusStats,
            activeFilters: Object.keys(this.filters).filter(key => this.filters[key])
        };
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.FilterManager = FilterManager;
}