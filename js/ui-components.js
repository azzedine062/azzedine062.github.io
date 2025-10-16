// js/ui-components.js - UI Component Management (Updated - No Provider Binding)

/**
 * UI Components Manager
 * Handles rendering and updating of UI components
 * Provider selection is now handled by ProviderManager
 */
class UIComponents {
    constructor() {
        this.selectedProviders = new Set(['aws', 'azure', 'gcp']);
        this.currentControls = [];
        this.complianceStatus = new Map();
    }

    /**
     * Initialize UI components and event listeners
     * Note: Provider checkbox binding removed - now handled by ProviderManager
     */
    init() {
        // Only load compliance status - provider binding removed
        this.loadComplianceStatus();
        console.log('✅ UI Components initialized (provider binding handled by ProviderManager)');
    }

    /**
     * Render controls grid based on selected providers
     * @param {Array} controls - Array of control objects to render
     */
    renderControls(controls) {
        this.currentControls = controls;
        const grid = document.getElementById('controlsGrid');
        
        if (!grid) return;

        // Show loading spinner
        this.showLoading();

        // Clear existing content
        grid.innerHTML = '';

        // Render each control card
        setTimeout(() => {
            controls.forEach(control => {
                const card = this.createControlCard(control);
                grid.appendChild(card);
            });
            this.hideLoading();
        }, 100);
    }

    /**
     * Create a control card element
     * @param {Object} control - Control object
     * @returns {HTMLElement} Control card element
     */
    createControlCard(control) {
        const card = document.createElement('div');
        card.className = 'control-card';
        card.innerHTML = `
            <div class="control-header">
                <div class="control-id">${this.escapeHtml(control.id)}</div>
            </div>
            <div class="control-title">${this.escapeHtml(control.title)}</div>
            
            <div class="implementation-guide">
                <h4>📋 Implementation Guidance</h4>
                <div>${this.escapeHtml(control.implementation)}</div>
            </div>
            
            ${this.renderCloudMappings(control.cloudMappings)}
            
            <div class="audit-evidence">
                <h4>📊 Audit Evidence Examples</h4>
                <div class="evidence-list">${this.escapeHtml(control.evidence)}</div>
            </div>
            
            ${this.renderComplianceStatus(control.id)}
        `;
        
        return card;
    }

    /**
     * Render cloud mappings section based on selected providers
     * @param {Object} cloudMappings - Cloud mappings object
     * @returns {string} HTML string for cloud mappings
     */
    renderCloudMappings(cloudMappings) {
        const selectedMappings = [];
        
        if (this.selectedProviders.has('aws')) {
            selectedMappings.push({
                provider: 'aws',
                title: '🔶 AWS Services',
                content: cloudMappings.aws || 'N/A',
                class: 'aws-section'
            });
        }
        
        if (this.selectedProviders.has('azure')) {
            selectedMappings.push({
                provider: 'azure',
                title: '🔷 Azure Services',
                content: cloudMappings.azure || 'N/A',
                class: 'azure-section'
            });
        }
        
        if (this.selectedProviders.has('gcp')) {
            selectedMappings.push({
                provider: 'gcp',
                title: '🔵 Google Cloud Services',
                content: cloudMappings.gcp || 'N/A',
                class: 'gcp-section'
            });
        }

        if (selectedMappings.length === 0) {
            return '<div class="cloud-mappings"><p>No cloud providers selected.</p></div>';
        }

        const gridClass = this.getGridClass(selectedMappings.length);
        const mappingsHTML = selectedMappings.map(mapping => `
            <div class="cloud-section ${mapping.class}">
                <h4>${mapping.title}</h4>
                <div class="service-list">${this.escapeHtml(mapping.content)}</div>
            </div>
        `).join('');

        return `
            <div class="cloud-mappings ${gridClass}">
                ${mappingsHTML}
            </div>
        `;
    }

    /**
     * Get appropriate grid class based on number of providers
     * @param {number} count - Number of selected providers
     * @returns {string} CSS class name
     */
    getGridClass(count) {
        switch (count) {
            case 1: return 'single-provider';
            case 2: return 'two-providers';
            case 3: return 'three-providers';
            default: return 'single-provider';
        }
    }

    /**
     * Render compliance status section
     * @param {string} controlId - Control ID
     * @returns {string} HTML string for compliance status
     */
    renderComplianceStatus(controlId) {
        const status = this.complianceStatus.get(controlId) || { status: '', comments: '' };
        
        return `
            <div class="compliance-status">
                <select id="status-${this.escapeHtml(controlId)}" data-control-id="${this.escapeHtml(controlId)}">
                    <option value="">Select Status</option>
                    <option value="implemented" ${status.status === 'implemented' ? 'selected' : ''}>Implemented</option>
                    <option value="partial" ${status.status === 'partial' ? 'selected' : ''}>Partially Implemented</option>
                    <option value="not-implemented" ${status.status === 'not-implemented' ? 'selected' : ''}>Not Implemented</option>
                    <option value="not-applicable" ${status.status === 'not-applicable' ? 'selected' : ''}>Not Applicable</option>
                </select>
                <input type="text" 
                       id="comments-${this.escapeHtml(controlId)}" 
                       data-control-id="${this.escapeHtml(controlId)}"
                       placeholder="Comments..." 
                       value="${this.escapeHtml(status.comments)}">
            </div>
        `;
    }

    /**
     * Escape HTML to prevent XSS
     * @param {string} text - Text to escape
     * @returns {string} Escaped text
     */
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Update compliance status for a control
     * @param {string} controlId - Control ID
     * @param {string} status - Compliance status
     * @param {string} comments - Comments
     */
    updateComplianceStatus(controlId, status, comments) {
        this.complianceStatus.set(controlId, { status, comments });
        this.saveComplianceStatus();
    }

    /**
     * Save compliance status to localStorage
     */
    saveComplianceStatus() {
        try {
            const statusObject = Object.fromEntries(this.complianceStatus);
            localStorage.setItem('iso27002-compliance-status', JSON.stringify(statusObject));
        } catch (error) {
            console.warn('Could not save compliance status to localStorage:', error);
            // Note: localStorage may not work in Claude.ai artifacts
            // Consider implementing JSON export/import instead
        }
    }

    /**
     * Load compliance status from localStorage
     */
    loadComplianceStatus() {
        try {
            const saved = localStorage.getItem('iso27002-compliance-status');
            if (saved) {
                const statusObject = JSON.parse(saved);
                this.complianceStatus = new Map(Object.entries(statusObject));
                console.log('✅ Loaded compliance status from localStorage');
            }
        } catch (error) {
            console.warn('Could not load compliance status from localStorage:', error);
            // Note: localStorage may not work in Claude.ai artifacts
        }
    }

    /**
     * Get selected cloud providers
     * @returns {Array} Array of selected provider names
     */
    getSelectedProviders() {
        return Array.from(this.selectedProviders);
    }

    /**
     * Set selected cloud providers (called by ProviderManager)
     * @param {Array} providers - Array of provider names
     */
    setSelectedProviders(providers) {
        this.selectedProviders = new Set(providers);
        
        // Re-render controls with new provider selection
        this.renderControls(this.currentControls);
    }

    /**
     * Show loading spinner
     */
    showLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.classList.add('show');
        }
    }

    /**
     * Hide loading spinner
     */
    hideLoading() {
        const spinner = document.getElementById('loadingSpinner');
        if (spinner) {
            spinner.classList.remove('show');
        }
    }

    /**
     * Clear all controls from the grid
     */
    clearControls() {
        const grid = document.getElementById('controlsGrid');
        if (grid) {
            grid.innerHTML = '';
        }
        this.currentControls = [];
    }

    /**
     * Get current compliance status for export
     * @returns {Map} Current compliance status map
     */
    getComplianceStatus() {
        return new Map(this.complianceStatus);
    }

    /**
     * Import compliance status
     * @param {Object} statusData - Status data to import
     */
    importComplianceStatus(statusData) {
        this.complianceStatus = new Map(Object.entries(statusData));
        this.saveComplianceStatus();
        this.renderControls(this.currentControls);
        
        if (window.errorHandler) {
            window.errorHandler.showSuccess('Compliance status imported successfully');
        }
    }

    /**
     * Reset all compliance status
     */
    resetComplianceStatus() {
        if (!confirm('Are you sure you want to reset all compliance status data? This cannot be undone.')) {
            return;
        }
        
        this.complianceStatus.clear();
        this.saveComplianceStatus();
        this.renderControls(this.currentControls);
        
        if (window.errorHandler) {
            window.errorHandler.showSuccess('Compliance status reset successfully');
        }
    }

    /**
     * Export compliance status as JSON file
     */
    exportComplianceStatus() {
        const statusObject = Object.fromEntries(this.complianceStatus);
        const dataStr = JSON.stringify(statusObject, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
        const filename = `ISO27002_Compliance_Status_${timestamp}.json`;
        
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        if (window.errorHandler) {
            window.errorHandler.showSuccess(`Compliance status exported to ${filename}`);
        }
    }

    /**
     * Show success message
     * @param {string} message - Success message
     */
    showSuccessMessage(message) {
        if (window.errorHandler) {
            window.errorHandler.showSuccess(message);
        } else {
            this.showMessage(message, 'success');
        }
    }

    /**
     * Show error message
     * @param {string} message - Error message
     */
    showErrorMessage(message) {
        if (window.errorHandler) {
            window.errorHandler.showError(message);
        } else {
            this.showMessage(message, 'error');
        }
    }

    /**
     * Show message with type (fallback if errorHandler not available)
     * @param {string} message - Message text
     * @param {string} type - Message type (success, error, info)
     */
    showMessage(message, type = 'info') {
        // Create message element if it doesn't exist
        let messageContainer = document.getElementById('messageContainer');
        if (!messageContainer) {
            messageContainer = document.createElement('div');
            messageContainer.id = 'messageContainer';
            messageContainer.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                max-width: 350px;
            `;
            document.body.appendChild(messageContainer);
        }

        // Create message element
        const messageEl = document.createElement('div');
        messageEl.style.cssText = `
            background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
            color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
            border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
            padding: 12px 16px;
            border-radius: 8px;
            margin-bottom: 10px;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            animation: slideIn 0.3s ease;
        `;
        messageEl.textContent = message;

        messageContainer.appendChild(messageEl);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (messageEl.parentNode) {
                        messageContainer.removeChild(messageEl);
                    }
                }, 300);
            }
        }, 3000);

        // Add CSS animations if not already added
        if (!document.getElementById('messageAnimations')) {
            const style = document.createElement('style');
            style.id = 'messageAnimations';
            style.textContent = `
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(100%); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideOut {
                    from { opacity: 1; transform: translateX(0); }
                    to { opacity: 0; transform: translateX(100%); }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.UIComponents = UIComponents;
}