// js/app.js - Main Application Controller (Updated - No Provider Duplication)

/**
 * Main Application Class
 * Now uses ProviderManager for all provider selection logic
 */
class ISO27002App {
    constructor() {
        this.uiComponents = null;
        this.filterManager = null;
        this.exportManager = null;
        this.providerManager = null;
        this.viewManager = null;
        this.progressTracker = null;
        this.isInitialized = false;
    }

    /**
     * Initialize the application
     */
    async init() {
        try {
            // Show loading spinner
            this.showInitialLoading();

            // Get or create provider manager
            this.providerManager = window.providerManager;
            if (!this.providerManager) {
                console.error('ProviderManager not available');
                throw new Error('ProviderManager not initialized');
            }

            // Initialize components in correct order
            this.uiComponents = new UIComponents();
            this.filterManager = new FilterManager(this.uiComponents);
            this.exportManager = new ExportManager(this.uiComponents, this.filterManager);
            this.viewManager = new ViewManager(this.uiComponents);
            
            // Initialize UI components (without provider binding - ProviderManager handles this)
            this.uiComponents.init();
            
            // Initialize view manager
            this.viewManager.init();

            // Load and initialize controls data
            await this.loadControlsData();
            
            // Initialize progress tracker after controls are loaded
            this.progressTracker = new ProgressTracker(this.allControls, this.uiComponents);
            this.progressTracker.init();

            // Connect provider manager to UI updates
            this.connectProviderManager();
            
            // Make view manager globally accessible for event handlers
            window.viewManager = this.viewManager;

            // Bind global events (excluding provider checkboxes)
            this.bindGlobalEvents();

            // Hide loading spinner
            this.hideInitialLoading();

            // Update status
            this.updateAppStatus();

            this.isInitialized = true;
            console.log('✅ ISO27002 App initialized successfully');

        } catch (error) {
            console.error('Failed to initialize app:', error);
            if (window.errorHandler) {
                window.errorHandler.handleInitializationError(error);
            } else {
                this.showErrorMessage('Failed to initialize application. Please refresh the page.');
            }
        }
    }

    /**
     * Connect provider manager to application components
     */
    connectProviderManager() {
        // Register callback for when provider selection changes
        this.providerManager.onChange((selectedProviders) => {
            console.log('Provider selection changed:', selectedProviders);
            
            // Update UI components with new provider selection
            if (this.uiComponents) {
                this.uiComponents.setSelectedProviders(selectedProviders);
            }
            
            // Re-apply filters to update display
            if (this.filterManager) {
                this.filterManager.applyFilters();
            }
            
            // Update progress tracker
            if (this.progressTracker) {
                this.progressTracker.updateProgress();
            }
        });
    }

    /**
     * Load controls data and initialize filters
     */
    async loadControlsData() {
        try {
            // Use the existing ISO27002_CONTROLS global variable
            const controls = window.ISO27002_CONTROLS || ISO27002_CONTROLS;
            
            if (!controls || controls.length === 0) {
                throw new Error('No controls data available');
            }
            
            // Store controls reference
            this.allControls = controls;

            // Initialize filter manager with controls
            this.filterManager.init(controls);

            console.log(`Loaded ${controls.length} controls successfully`);

        } catch (error) {
            console.error('Failed to load controls data:', error);
            if (window.errorHandler) {
                window.errorHandler.handleDataLoadError('security controls');
            }
            throw error;
        }
    }

    /**
     * Update app status indicators
     */
    updateAppStatus() {
        const statusIndicator = document.getElementById('statusIndicator');
        const statusText = document.getElementById('statusText');
        
        if (statusIndicator && statusText) {
            if (this.isInitialized) {
                statusIndicator.textContent = '✅';
                const controlCount = window.ISO27002_CONTROLS ? window.ISO27002_CONTROLS.length : 0;
                const providerCount = this.providerManager.getSelectedCount();
                statusText.textContent = `Ready - ${controlCount} controls, ${providerCount} provider${providerCount !== 1 ? 's' : ''} selected`;
            } else {
                statusIndicator.textContent = '❌';
                statusText.textContent = 'Error';
            }
        }
    }

    /**
     * Bind global application events (excluding provider checkboxes)
     */
    bindGlobalEvents() {
        // Export button
        const exportBtn = document.querySelector('.export-btn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.exportManager.exportToExcel();
            });
        }

        // Reset button
        const resetBtn = document.querySelector('.reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetFilters();
            });
        }

        // NOTE: Provider checkboxes are now handled by ProviderManager
        // No duplicate event listeners here!

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });

        // Window resize handler
        window.addEventListener('resize', this.debounce(() => {
            this.handleWindowResize();
        }, 250));

        // Error handling for unhandled promise rejections
        window.addEventListener('unhandledrejection', (e) => {
            console.error('Unhandled promise rejection:', e.reason);
            if (window.errorHandler) {
                window.errorHandler.showError('An unexpected error occurred. Please try again.');
            }
        });
    }

    /**
     * Handle keyboard shortcuts
     */
    handleKeyboardShortcuts(event) {
        // Ctrl/Cmd + E: Export
        if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
            event.preventDefault();
            this.exportManager.exportToExcel();
        }

        // Ctrl/Cmd + R: Reset filters (prevent page refresh)
        if ((event.ctrlKey || event.metaKey) && event.key === 'r') {
            event.preventDefault();
            this.resetFilters();
        }

        // Ctrl/Cmd + F: Focus search
        if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
            event.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }

        // Escape: Clear search
        if (event.key === 'Escape') {
            const searchInput = document.getElementById('searchInput');
            if (searchInput && searchInput.value) {
                searchInput.value = '';
                searchInput.dispatchEvent(new Event('input'));
            }
        }

        // Alt + 1-3: Toggle providers
        if (event.altKey && ['1', '2', '3'].includes(event.key)) {
            event.preventDefault();
            const providerMap = { '1': 'aws', '2': 'azure', '3': 'gcp' };
            const provider = providerMap[event.key];
            
            if (this.providerManager.isProviderSelected(provider)) {
                this.providerManager.deselectProvider(provider);
            } else {
                this.providerManager.selectProvider(provider);
            }
        }

        // Alt + A: Select all providers
        if (event.altKey && event.key === 'a') {
            event.preventDefault();
            this.providerManager.selectAll();
        }
    }

    /**
     * Handle window resize events
     */
    handleWindowResize() {
        console.log('Window resized, layout adjusted');
    }

    /**
     * Reset all filters
     */
    resetFilters() {
        if (this.filterManager) {
            this.filterManager.resetFilters();
        }
    }

    /**
     * Show initial loading screen
     */
    showInitialLoading() {
        const loadingElement = document.getElementById('loadingSpinner');
        if (loadingElement) {
            loadingElement.classList.add('show');
        }
    }

    /**
     * Hide initial loading screen
     */
    hideInitialLoading() {
        const loadingElement = document.getElementById('loadingSpinner');
        if (loadingElement) {
            loadingElement.classList.remove('show');
        }
    }

    /**
     * Show error message
     */
    showErrorMessage(message) {
        if (window.errorHandler) {
            window.errorHandler.showError(message);
        } else if (this.uiComponents) {
            this.uiComponents.showErrorMessage(message);
        } else {
            alert(message); // Fallback
        }
    }

    /**
     * Show success message
     */
    showSuccessMessage(message) {
        if (window.errorHandler) {
            window.errorHandler.showSuccess(message);
        } else if (this.uiComponents) {
            this.uiComponents.showSuccessMessage(message);
        }
    }

    /**
     * Get application state for debugging
     */
    getState() {
        if (!this.isInitialized) {
            return { status: 'not_initialized' };
        }

        return {
            status: 'initialized',
            selectedProviders: this.providerManager.getSelectedProviders(),
            currentFilters: this.filterManager.getCurrentFilters(),
            filterStats: this.filterManager.getFilterStats(),
            complianceStatusCount: this.uiComponents.getComplianceStatus().size,
            totalControls: ISO27002_CONTROLS ? ISO27002_CONTROLS.length : 0,
            currentView: this.viewManager ? this.viewManager.getCurrentView() : 'cards',
            progressData: this.progressTracker ? this.progressTracker.getProgressData() : null
        };
    }

    /**
     * Utility function to debounce function calls
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Check application health
     */
    checkHealth() {
        const health = {
            status: 'healthy',
            checks: {},
            timestamp: new Date().toISOString()
        };

        health.checks.initialized = {
            status: this.isInitialized ? 'pass' : 'fail',
            message: this.isInitialized ? 'Application initialized' : 'Application not initialized'
        };

        const controls = window.ISO27002_CONTROLS || ISO27002_CONTROLS;
        health.checks.controlsData = {
            status: controls && controls.length > 0 ? 'pass' : 'fail',
            message: controls ? `${controls.length} controls loaded` : 'No controls data',
            count: controls ? controls.length : 0
        };

        health.checks.providerManager = {
            status: this.providerManager ? 'pass' : 'fail',
            message: this.providerManager ? 
                `${this.providerManager.getSelectedCount()} providers selected` : 
                'Provider manager not initialized'
        };

        const failedChecks = Object.values(health.checks).filter(check => check.status === 'fail');
        if (failedChecks.length > 0) {
            health.status = 'unhealthy';
        }

        return health;
    }
}

// Global functions for backward compatibility
function exportToExcel() {
    if (window.app && window.app.exportManager) {
        window.app.exportManager.exportToExcel();
    } else {
        console.error('Export manager not available');
    }
}

function resetFilters() {
    if (window.app) {
        window.app.resetFilters();
    } else {
        console.error('App not initialized');
    }
}

function checkAppHealth() {
    if (window.app) {
        const health = window.app.checkHealth();
        console.log('App Health:', health);
        
        if (health.status === 'healthy') {
            if (window.errorHandler) {
                window.errorHandler.showSuccess('Application is healthy!');
            }
        } else {
            if (window.errorHandler) {
                window.errorHandler.showError('Application health issues detected. Check console for details.');
            }
        }
        return health;
    } else {
        console.error('App not initialized');
        return { status: 'unhealthy', message: 'App not initialized' };
    }
}

function refreshControls() {
    if (window.app && window.app.filterManager) {
        window.app.filterManager.applyFilters();
        if (window.errorHandler) {
            window.errorHandler.showSuccess('Controls refreshed successfully');
        }
    } else {
        console.error('Filter manager not available');
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Create global app instance
        window.app = new ISO27002App();
        
        // Initialize the application
        await window.app.init();
        
        // Add development helpers in console
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('%c🛠️ Development Mode', 'color: #3498db; font-size: 14px; font-weight: bold');
            console.log('Available commands:');
            console.log('- window.app.getState(): Get current application state');
            console.log('- checkAppHealth(): Check application health');
            console.log('- refreshControls(): Refresh controls display');
            console.log('- resetFilters(): Reset all filters');
            console.log('- exportToExcel(): Export controls to Excel');
            console.log('- providerManager.getState(): Get provider selection state');
        }

    } catch (error) {
        console.error('Failed to initialize application:', error);
        
        const statusIndicator = document.getElementById('statusIndicator');
        const statusText = document.getElementById('statusText');
        
        if (statusIndicator && statusText) {
            statusIndicator.textContent = '❌';
            statusText.textContent = 'Failed to Load';
        }
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ISO27002App;
}