// js/export-manager.js - Export and Import Management

/**
 * Export Manager
 * Handles exporting and importing of control data
 */
class ExportManager {
    constructor(uiComponents, filterManager) {
        this.uiComponents = uiComponents;
        this.filterManager = filterManager;
    }

    /**
     * Export filtered controls to Excel
     */
    exportToExcel() {
        try {
            const controls = this.filterManager.getFilteredControls();
            const selectedProviders = this.uiComponents.getSelectedProviders();
            const complianceStatus = this.uiComponents.getComplianceStatus();

            if (controls.length === 0) {
                this.uiComponents.showErrorMessage('No controls to export. Please adjust your filters.');
                return;
            }

            // Prepare export data
            const exportData = this.prepareExcelData(controls, selectedProviders, complianceStatus);
            
            // Create workbook
            const workbook = XLSX.utils.book_new();
            
            // Create main worksheet
            const worksheet = this.createMainWorksheet(exportData);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'ISO27002-2022 Controls');
            
            // Create summary worksheet
            const summaryWorksheet = this.createSummaryWorksheet(controls, selectedProviders, complianceStatus);
            XLSX.utils.book_append_sheet(workbook, summaryWorksheet, 'Summary');
            
            // Generate filename with timestamp
            const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
            const providerSuffix = selectedProviders.length > 0 ? `_${selectedProviders.join('-')}` : '_all-providers';
            const filename = `ISO27002-2022_Controls${providerSuffix}_${timestamp}.xlsx`;
            
            // Export file
            XLSX.writeFile(workbook, filename);
            
            this.uiComponents.showSuccessMessage(`Exported ${controls.length} controls to ${filename}`);
            
        } catch (error) {
            console.error('Export error:', error);
            window.errorHandler.handleExportError('Excel');
        }
    }

    /**
     * Prepare data for Excel export
     * @param {Array} controls - Controls to export
     * @param {Array} selectedProviders - Selected cloud providers
     * @param {Map} complianceStatus - Compliance status data
     * @returns {Array} Formatted data for Excel
     */
    prepareExcelData(controls, selectedProviders, complianceStatus) {
        return controls.map(control => {
            const status = complianceStatus.get(control.id) || { status: '', comments: '' };
            const exportRow = {
                'Control ID': control.id,
                'Control Title': control.title,
                'Category': this.getCategoryLabel(control.category),
                'Implementation Guidance': control.implementation,
                'Audit Evidence': control.evidence,
                'Compliance Status': status.status,
                'Comments': status.comments
            };

            // Add selected cloud provider columns
            selectedProviders.forEach(provider => {
                const providerName = this.getProviderDisplayName(provider);
                exportRow[`${providerName} Services`] = control.cloudMappings[provider] || 'N/A';
            });

            return exportRow;
        });
    }

    /**
     * Create main worksheet with controls data
     * @param {Array} exportData - Prepared export data
     * @returns {Object} XLSX worksheet
     */
    createMainWorksheet(exportData) {
        const worksheet = XLSX.utils.json_to_sheet(exportData);
        
        // Set column widths
        const columnWidths = [
            { wch: 12 }, // Control ID
            { wch: 50 }, // Control Title
            { wch: 15 }, // Category
            { wch: 80 }, // Implementation Guidance
            { wch: 80 }, // Audit Evidence
            { wch: 20 }, // Compliance Status
            { wch: 50 }, // Comments
        ];

        // Add widths for cloud provider columns
        const selectedProviders = this.uiComponents.getSelectedProviders();
        selectedProviders.forEach(() => {
            columnWidths.push({ wch: 70 });
        });

        worksheet['!cols'] = columnWidths;

        // Add header styling
        const headerRange = XLSX.utils.decode_range(worksheet['!ref']);
        for (let col = headerRange.s.c; col <= headerRange.e.c; col++) {
            const cellAddress = XLSX.utils.encode_cell({ r: 0, c: col });
            if (worksheet[cellAddress]) {
                worksheet[cellAddress].s = {
                    font: { bold: true, color: { rgb: "FFFFFF" } },
                    fill: { fgColor: { rgb: "366092" } },
                    alignment: { horizontal: "center", vertical: "center" }
                };
            }
        }

        return worksheet;
    }

    /**
     * Create summary worksheet
     * @param {Array} controls - Controls data
     * @param {Array} selectedProviders - Selected providers
     * @param {Map} complianceStatus - Compliance status
     * @returns {Object} XLSX worksheet
     */
    createSummaryWorksheet(controls, selectedProviders, complianceStatus) {
        const summary = [];
        
        // Basic statistics
        summary.push(['Export Summary', '']);
        summary.push(['Generated', new Date().toLocaleString()]);
        summary.push(['Total Controls', controls.length]);
        summary.push(['Selected Providers', selectedProviders.join(', ') || 'None']);
        summary.push(['', '']);

        // Category breakdown
        summary.push(['Category Breakdown', '']);
        const categoryStats = this.getCategoryStats(controls);
        Object.entries(categoryStats).forEach(([category, count]) => {
            summary.push([this.getCategoryLabel(category), count]);
        });
        summary.push(['', '']);

        // Compliance status breakdown
        summary.push(['Compliance Status Breakdown', '']);
        const statusStats = this.getStatusStats(controls, complianceStatus);
        Object.entries(statusStats).forEach(([status, count]) => {
            summary.push([this.getStatusLabel(status), count]);
        });

        const worksheet = XLSX.utils.aoa_to_sheet(summary);
        worksheet['!cols'] = [{ wch: 25 }, { wch: 15 }];

        return worksheet;
    }

    /**
     * Get category statistics
     * @param {Array} controls - Controls array
     * @returns {Object} Category statistics
     */
    getCategoryStats(controls) {
        const stats = {};
        controls.forEach(control => {
            stats[control.category] = (stats[control.category] || 0) + 1;
        });
        return stats;
    }

    /**
     * Get status statistics
     * @param {Array} controls - Controls array
     * @param {Map} complianceStatus - Compliance status map
     * @returns {Object} Status statistics
     */
    getStatusStats(controls, complianceStatus) {
        const stats = {};
        controls.forEach(control => {
            const status = complianceStatus.get(control.id);
            const statusKey = status ? status.status || 'unset' : 'unset';
            stats[statusKey] = (stats[statusKey] || 0) + 1;
        });
        return stats;
    }

    /**
     * Get category display label
     * @param {string} category - Category number
     * @returns {string} Category label
     */
    getCategoryLabel(category) {
        const labels = {
            '5': '5 - Organizational',
            '6': '6 - People',
            '7': '7 - Physical',
            '8': '8 - Technological'
        };
        return labels[category] || category;
    }

    /**
     * Get status display label
     * @param {string} status - Status key
     * @returns {string} Status label
     */
    getStatusLabel(status) {
        const labels = {
            'implemented': 'Implemented',
            'partial': 'Partially Implemented',
            'not-implemented': 'Not Implemented',
            'not-applicable': 'Not Applicable',
            'unset': 'Not Set'
        };
        return labels[status] || status;
    }

    /**
     * Get provider display name
     * @param {string} provider - Provider key
     * @returns {string} Provider display name
     */
    getProviderDisplayName(provider) {
        const names = {
            'aws': 'AWS',
            'azure': 'Azure',
            'gcp': 'Google Cloud'
        };
        return names[provider] || provider;
    }

    /**
     * Export compliance status as JSON
     */
    exportComplianceStatus() {
        try {
            const complianceStatus = this.uiComponents.getComplianceStatus();
            const statusObject = Object.fromEntries(complianceStatus);
            
            const dataStr = JSON.stringify(statusObject, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            
            const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
            const filename = `ISO27002_Compliance_Status_${timestamp}.json`;
            
            this.downloadBlob(dataBlob, filename);
            this.uiComponents.showSuccessMessage(`Compliance status exported to ${filename}`);
            
        } catch (error) {
            console.error('Export compliance status error:', error);
            this.uiComponents.showErrorMessage('Failed to export compliance status.');
        }
    }

    /**
     * Import compliance status from JSON file
     * @param {File} file - JSON file to import
     */
    importComplianceStatus(file) {
        if (!file || file.type !== 'application/json') {
            this.uiComponents.showErrorMessage('Please select a valid JSON file.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const statusData = JSON.parse(e.target.result);
                this.uiComponents.importComplianceStatus(statusData);
                this.uiComponents.showSuccessMessage('Compliance status imported successfully.');
            } catch (error) {
                console.error('Import error:', error);
                this.uiComponents.showErrorMessage('Failed to import compliance status. Invalid file format.');
            }
        };
        reader.readAsText(file);
    }

    /**
     * Download blob as file
     * @param {Blob} blob - Data blob
     * @param {string} filename - File name
     */
    downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    /**
     * Export current view as PDF (requires additional library)
     */
    exportToPDF() {
        this.uiComponents.showErrorMessage('PDF export feature coming soon!');
    }

    /**
     * Export filtered controls as CSV
     */
    exportToCSV() {
        try {
            const controls = this.filterManager.getFilteredControls();
            const selectedProviders = this.uiComponents.getSelectedProviders();
            const complianceStatus = this.uiComponents.getComplianceStatus();

            if (controls.length === 0) {
                this.uiComponents.showErrorMessage('No controls to export. Please adjust your filters.');
                return;
            }

            const csvData = this.prepareCSVData(controls, selectedProviders, complianceStatus);
            const csvContent = this.arrayToCSV(csvData);
            
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const timestamp = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
            const filename = `ISO27002-2022_Controls_${timestamp}.csv`;
            
            this.downloadBlob(blob, filename);
            this.uiComponents.showSuccessMessage(`Exported ${controls.length} controls to ${filename}`);
            
        } catch (error) {
            console.error('CSV export error:', error);
            this.uiComponents.showErrorMessage('Failed to export CSV data.');
        }
    }

    /**
     * Prepare data for CSV export
     * @param {Array} controls - Controls to export
     * @param {Array} selectedProviders - Selected providers
     * @param {Map} complianceStatus - Compliance status
     * @returns {Array} CSV data array
     */
    prepareCSVData(controls, selectedProviders, complianceStatus) {
        const headers = [
            'Control ID',
            'Control Title', 
            'Category',
            'Implementation Guidance',
            'Audit Evidence',
            'Compliance Status',
            'Comments'
        ];

        selectedProviders.forEach(provider => {
            headers.push(`${this.getProviderDisplayName(provider)} Services`);
        });

        const rows = controls.map(control => {
            const status = complianceStatus.get(control.id) || { status: '', comments: '' };
            const row = [
                control.id,
                control.title,
                this.getCategoryLabel(control.category),
                control.implementation,
                control.evidence,
                status.status,
                status.comments
            ];

            selectedProviders.forEach(provider => {
                row.push(control.cloudMappings[provider] || 'N/A');
            });

            return row;
        });

        return [headers, ...rows];
    }

    /**
     * Convert array to CSV string
     * @param {Array} array - 2D array of data
     * @returns {string} CSV string
     */
    arrayToCSV(array) {
        return array.map(row => 
            row.map(cell => {
                const cellStr = String(cell || '');
                return cellStr.includes(',') || cellStr.includes('"') || cellStr.includes('\n') 
                    ? `"${cellStr.replace(/"/g, '""')}"` 
                    : cellStr;
            }).join(',')
        ).join('\n');
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.ExportManager = ExportManager;
}