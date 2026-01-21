// js/pdf-generator.js - Professional PDF Report Generation

/**
 * PDFGenerator Class
 * Generates professional multi-page PDF reports using jsPDF
 */
class PDFGenerator {
    constructor(controls, framework, complianceStatus, progressData) {
        this.controls = controls;
        this.framework = framework;
        this.complianceStatus = complianceStatus;
        this.progressData = progressData;
        this.doc = null;
        this.currentY = 20;
        this.pageHeight = 280; // A4 page height in mm
        this.margin = 20;
        this.pageWidth = 210; // A4 width in mm
    }

    /**
     * Generate complete PDF report
     */
    async generateReport(options = {}) {
        try {
            const { jsPDF } = window.jspdf;
            this.doc = new jsPDF();
            this.currentY = 20;
            
            // Get options
            const includeExecutiveSummary = options.includeExecutiveSummary !== false;
            const includeProgressCharts = options.includeProgressCharts !== false;
            const includeImplementationGuides = options.includeImplementationGuides !== false;
            const includeCloudMappings = options.includeCloudMappings !== false;
            const controlsFilter = options.controlsFilter || 'all';
            
            // Generate report sections
            this.addCoverPage();
            
            if (includeExecutiveSummary) {
                this.addNewPage();
                await this.addExecutiveSummary();
            }
            
            if (includeProgressCharts) {
                this.addNewPage();
                await this.addProgressCharts();
            }
            
            // Add control details
            this.addNewPage();
            await this.addControlDetails(includeImplementationGuides, includeCloudMappings, controlsFilter);
            
            return this.doc;
        } catch (error) {
            console.error('PDF generation error:', error);
            throw error;
        }
    }

    /**
     * Add cover page
     */
    addCoverPage() {
        const doc = this.doc;
        
        // Title
        doc.setFontSize(32);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(40, 60, 80);
        
        const titleLines = doc.splitTextToSize(this.getFrameworkTitle(), 170);
        doc.text(titleLines, this.pageWidth / 2, 80, { align: 'center' });
        
        // Subtitle
        doc.setFontSize(20);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text('Compliance Report', this.pageWidth / 2, 110, { align: 'center' });
        
        // Date
        doc.setFontSize(12);
        const date = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        doc.text(`Generated on ${date}`, this.pageWidth / 2, 130, { align: 'center' });
        
        // Progress percentage (large)
        if (this.progressData) {
            doc.setFontSize(48);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(76, 175, 80);
            doc.text(`${this.progressData.percentage}%`, this.pageWidth / 2, 170, { align: 'center' });
            
            doc.setFontSize(14);
            doc.setFont(undefined, 'normal');
            doc.setTextColor(100, 100, 100);
            doc.text('Implementation Complete', this.pageWidth / 2, 185, { align: 'center' });
        }
        
        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text('Cloud Compliance Dashboard', this.pageWidth / 2, 260, { align: 'center' });
    }

    /**
     * Add executive summary page
     */
    async addExecutiveSummary() {
        const doc = this.doc;
        this.currentY = this.margin;
        
        // Section title
        this.addSectionTitle('Executive Summary');
        
        // Overview text
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(60, 60, 60);
        
        const overviewText = `This report provides a comprehensive overview of ${this.getFrameworkTitle()} compliance status as of ${new Date().toLocaleDateString()}.`;
        const lines = doc.splitTextToSize(overviewText, 170);
        doc.text(lines, this.margin, this.currentY);
        this.currentY += lines.length * 7 + 10;
        
        // Key metrics
        this.addSubtitle('Key Metrics');
        
        if (this.progressData) {
            const metrics = [
                ['Total Controls', this.progressData.total],
                ['Implemented', this.progressData.implemented],
                ['In Progress', this.progressData.inProgress],
                ['Not Started', this.progressData.notStarted],
                ['Not Applicable', this.progressData.notApplicable],
                ['Overall Progress', `${this.progressData.percentage}%`]
            ];
            
            metrics.forEach(([label, value]) => {
                doc.setFont(undefined, 'bold');
                doc.text(`${label}:`, this.margin + 10, this.currentY);
                doc.setFont(undefined, 'normal');
                doc.text(`${value}`, this.margin + 80, this.currentY);
                this.currentY += 8;
            });
        }
        
        this.currentY += 10;
        
        // Status breakdown
        this.addSubtitle('Implementation Status');
        
        const statusGroups = this.groupControlsByStatus();
        Object.entries(statusGroups).forEach(([status, controls]) => {
            if (controls.length > 0) {
                doc.setFont(undefined, 'bold');
                doc.text(`${this.getStatusLabel(status)} (${controls.length}):`, this.margin + 10, this.currentY);
                this.currentY += 6;
                
                doc.setFont(undefined, 'normal');
                doc.setFontSize(9);
                doc.setTextColor(100, 100, 100);
                const percentage = Math.round((controls.length / this.controls.length) * 100);
                doc.text(`${percentage}% of total controls`, this.margin + 15, this.currentY);
                this.currentY += 10;
                doc.setFontSize(11);
                doc.setTextColor(60, 60, 60);
            }
        });
    }

    /**
     * Add progress charts page
     */
    async addProgressCharts() {
        const doc = this.doc;
        this.currentY = this.margin;
        
        this.addSectionTitle('Progress Visualization');
        
        // Try to capture progress charts
        const progressElement = document.getElementById('circularProgress') || 
                               document.querySelector('.progress-section-enhanced');
        
        if (progressElement && window.html2canvas) {
            try {
                const canvas = await html2canvas(progressElement, {
                    scale: 2,
                    backgroundColor: '#ffffff'
                });
                const imgData = canvas.toDataURL('image/png');
                const imgWidth = 170;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                
                doc.addImage(imgData, 'PNG', this.margin, this.currentY, imgWidth, imgHeight);
                this.currentY += imgHeight + 10;
            } catch (error) {
                console.warn('Could not capture progress chart:', error);
                this.addTextPlaceholder('Progress chart visualization');
            }
        } else {
            this.addTextPlaceholder('Progress chart visualization (html2canvas required)');
        }
    }

    /**
     * Add control details pages
     */
    async addControlDetails(includeImplementation, includeCloudMappings, filter) {
        const doc = this.doc;
        
        // Filter controls based on option
        let controlsToExport = this.controls;
        if (filter === 'implemented') {
            controlsToExport = this.controls.filter(c => {
                const status = this.complianceStatus.get(c.id);
                return status && status.status === 'implemented';
            });
        }
        
        // Group by status
        const grouped = this.groupControlsByStatus(controlsToExport);
        
        // Add sections for each status
        const statusOrder = ['implemented', 'in-progress', 'not-started'];
        
        statusOrder.forEach(status => {
            const controls = grouped[status] || [];
            if (controls.length > 0) {
                this.currentY = this.margin;
                this.addNewPage();
                
                this.addSectionTitle(`${this.getStatusLabel(status)} Controls`);
                doc.setFontSize(10);
                doc.setTextColor(100, 100, 100);
                doc.text(`${controls.length} control(s)`, this.margin, this.currentY);
                this.currentY += 15;
                
                controls.forEach((control, index) => {
                    this.addControlCard(control, includeImplementation, includeCloudMappings);
                    
                    // Add page break if needed (except for last control)
                    if (index < controls.length - 1 && this.currentY > this.pageHeight - 40) {
                        this.addNewPage();
                        this.currentY = this.margin;
                    }
                });
            }
        });
    }

    /**
     * Add individual control card
     */
    addControlCard(control, includeImplementation, includeCloudMappings) {
        const doc = this.doc;
        
        // Check if we need a new page
        if (this.currentY > this.pageHeight - 60) {
            this.addNewPage();
            this.currentY = this.margin;
        }
        
        // Control header with box
        doc.setFillColor(245, 245, 245);
        doc.rect(this.margin, this.currentY, 170, 10, 'F');
        
        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(40, 60, 80);
        doc.text(`${control.id} - ${control.title}`, this.margin + 3, this.currentY + 7);
        
        this.currentY += 15;
        
        // Implementation guide
        if (includeImplementation && control.implementation) {
            doc.setFontSize(9);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(100, 100, 100);
            doc.text('Implementation:', this.margin + 3, this.currentY);
            this.currentY += 5;
            
            doc.setFont(undefined, 'normal');
            doc.setTextColor(60, 60, 60);
            const implLines = doc.splitTextToSize(control.implementation, 164);
            doc.text(implLines, this.margin + 3, this.currentY);
            this.currentY += implLines.length * 4 + 5;
        }
        
        // Cloud mappings
        if (includeCloudMappings && control.cloudMappings) {
            const providers = ['aws', 'azure', 'gcp'];
            providers.forEach(provider => {
                if (control.cloudMappings[provider] && 
                    control.cloudMappings[provider] !== 'N/A' && 
                    control.cloudMappings[provider] !== 'Not Loaded') {
                    
                    doc.setFontSize(9);
                    doc.setFont(undefined, 'bold');
                    doc.setTextColor(100, 100, 100);
                    doc.text(`${provider.toUpperCase()}:`, this.margin + 3, this.currentY);
                    this.currentY += 5;
                    
                    doc.setFont(undefined, 'normal');
                    doc.setFontSize(8);
                    const cloudLines = doc.splitTextToSize(control.cloudMappings[provider], 164);
                    doc.text(cloudLines, this.margin + 3, this.currentY);
                    this.currentY += cloudLines.length * 3.5 + 3;
                }
            });
        }
        
        // Status
        const status = this.complianceStatus.get(control.id);
        if (status && status.status) {
            doc.setFontSize(9);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(76, 175, 80);
            doc.text(`Status: ${this.getStatusLabel(status.status)}`, this.margin + 3, this.currentY);
            this.currentY += 5;
            
            if (status.comments) {
                doc.setFont(undefined, 'italic');
                doc.setFontSize(8);
                doc.setTextColor(100, 100, 100);
                const commentLines = doc.splitTextToSize(status.comments, 164);
                doc.text(commentLines, this.margin + 3, this.currentY);
                this.currentY += commentLines.length * 3.5;
            }
        }
        
        this.currentY += 10;
    }

    /**
     * Add section title
     */
    addSectionTitle(title) {
        const doc = this.doc;
        doc.setFontSize(18);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(40, 60, 80);
        doc.text(title, this.margin, this.currentY);
        this.currentY += 12;
        
        // Underline
        doc.setDrawColor(100, 126, 234);
        doc.setLineWidth(0.5);
        doc.line(this.margin, this.currentY - 2, this.pageWidth - this.margin, this.currentY - 2);
        this.currentY += 8;
    }

    /**
     * Add subtitle
     */
    addSubtitle(title) {
        const doc = this.doc;
        doc.setFontSize(13);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(60, 60, 60);
        doc.text(title, this.margin, this.currentY);
        this.currentY += 10;
    }

    /**
     * Add new page
     */
    addNewPage() {
        this.doc.addPage();
        this.currentY = this.margin;
        this.addPageNumber();
    }

    /**
     * Add page number
     */
    addPageNumber() {
        const doc = this.doc;
        const pageCount = doc.internal.getNumberOfPages();
        
        doc.setFontSize(9);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(150, 150, 150);
        doc.text(`Page ${pageCount}`, this.pageWidth / 2, this.pageHeight, { align: 'center' });
    }

    /**
     * Add text placeholder
     */
    addTextPlaceholder(text) {
        const doc = this.doc;
        doc.setFontSize(10);
        doc.setFont(undefined, 'italic');
        doc.setTextColor(150, 150, 150);
        doc.text(`[${text}]`, this.margin, this.currentY);
        this.currentY += 30;
    }

    /**
     * Group controls by status
     */
    groupControlsByStatus(controls = null) {
        const controlsToGroup = controls || this.controls;
        const groups = {
            'implemented': [],
            'in-progress': [],
            'not-started': [],
            'not-applicable': []
        };
        
        controlsToGroup.forEach(control => {
            const status = this.complianceStatus.get(control.id);
            if (status && status.status) {
                const statusKey = status.status === 'partial' ? 'in-progress' : status.status;
                if (groups[statusKey]) {
                    groups[statusKey].push(control);
                } else {
                    groups['not-started'].push(control);
                }
            } else {
                groups['not-started'].push(control);
            }
        });
        
        return groups;
    }

    /**
     * Get framework title
     */
    getFrameworkTitle() {
        const titles = {
            'ISO27002': 'ISO/IEC 27002:2022',
            'ISO27001': 'ISO/IEC 27001:2022',
            'ISO27017': 'ISO/IEC 27017:2015',
            'ISO27018': 'ISO/IEC 27018:2019',
            'CSA-CCM': 'CSA Cloud Controls Matrix v4',
            'CSACCM': 'CSA Cloud Controls Matrix v4'
        };
        return titles[this.framework] || this.framework;
    }

    /**
     * Get status label
     */
    getStatusLabel(status) {
        const labels = {
            'implemented': 'Implemented',
            'in-progress': 'In Progress',
            'partial': 'In Progress',
            'not-implemented': 'Not Started',
            'not-started': 'Not Started',
            'not-applicable': 'Not Applicable',
            '': 'Not Started'
        };
        return labels[status] || 'Not Started';
    }

    /**
     * Save PDF with filename
     */
    save(filename) {
        if (!this.doc) {
            throw new Error('No document to save. Generate report first.');
        }
        
        const timestamp = new Date().toISOString().slice(0, 10);
        const finalFilename = filename || `${this.framework}-Compliance-Report-${timestamp}.pdf`;
        this.doc.save(finalFilename);
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.PDFGenerator = PDFGenerator;
}
