// js/progress-tracker.js - Visual Progress Tracking

/**
 * ProgressTracker Class
 * Handles progress calculation and visualization with circular progress rings
 */
class ProgressTracker {
    constructor(controls, uiComponents) {
        this.controls = controls;
        this.uiComponents = uiComponents;
        this.progressData = null;
    }

    /**
     * Initialize progress tracker
     */
    init() {
        this.updateProgress();
        console.log('✅ ProgressTracker initialized');
    }

    /**
     * Calculate overall progress
     */
    calculateProgress() {
        const total = this.controls.length;
        const complianceStatus = this.uiComponents.getComplianceStatus();
        
        let implemented = 0;
        let inProgress = 0;
        let notStarted = 0;
        let notApplicable = 0;
        
        this.controls.forEach(control => {
            const status = complianceStatus.get(control.id);
            if (status) {
                switch (status.status) {
                    case 'implemented':
                        implemented++;
                        break;
                    case 'in-progress':
                    case 'partial':
                        inProgress++;
                        break;
                    case 'not-applicable':
                        notApplicable++;
                        break;
                    default:
                        notStarted++;
                }
            } else {
                notStarted++;
            }
        });
        
        const percentage = total > 0 ? Math.round((implemented / total) * 100) : 0;
        
        return {
            total,
            implemented,
            inProgress,
            notStarted,
            notApplicable,
            remaining: total - implemented - notApplicable,
            percentage
        };
    }

    /**
     * Calculate progress by category
     */
    calculateCategoryProgress() {
        const complianceStatus = this.uiComponents.getComplianceStatus();
        const categories = {};
        
        this.controls.forEach(control => {
            const category = control.category || 'other';
            
            if (!categories[category]) {
                categories[category] = {
                    total: 0,
                    implemented: 0,
                    inProgress: 0,
                    notStarted: 0
                };
            }
            
            categories[category].total++;
            
            const status = complianceStatus.get(control.id);
            if (status) {
                switch (status.status) {
                    case 'implemented':
                        categories[category].implemented++;
                        break;
                    case 'in-progress':
                    case 'partial':
                        categories[category].inProgress++;
                        break;
                    default:
                        categories[category].notStarted++;
                }
            } else {
                categories[category].notStarted++;
            }
            
            // Calculate percentage
            categories[category].percentage = Math.round(
                (categories[category].implemented / categories[category].total) * 100
            );
        });
        
        return categories;
    }

    /**
     * Update all progress visualizations
     */
    updateProgress() {
        this.progressData = this.calculateProgress();
        const categoryData = this.calculateCategoryProgress();
        
        this.renderCircularProgress(this.progressData);
        this.renderQuickStats(this.progressData);
        this.renderCategoryBreakdown(categoryData);
    }

    /**
     * Render circular progress ring
     */
    renderCircularProgress(data) {
        const container = document.getElementById('circularProgress');
        if (!container) return;
        
        const radius = 80;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (data.percentage / 100) * circumference;
        
        container.innerHTML = `
            <svg class="progress-ring" width="200" height="200" viewBox="0 0 200 200">
                <!-- Background circle -->
                <circle class="progress-ring-bg" 
                        cx="100" cy="100" r="${radius}"
                        fill="transparent" 
                        stroke="#e0e0e0" 
                        stroke-width="20"/>
                
                <!-- Progress circle -->
                <circle class="progress-ring-fill" 
                        cx="100" cy="100" r="${radius}"
                        fill="transparent" 
                        stroke="${this.getProgressColor(data.percentage)}" 
                        stroke-width="20"
                        stroke-linecap="round"
                        stroke-dasharray="${circumference}"
                        stroke-dashoffset="${offset}"
                        transform="rotate(-90 100 100)"
                        style="transition: stroke-dashoffset 0.5s ease, stroke 0.5s ease;"/>
            </svg>
            <div class="progress-center">
                <div class="progress-percentage">${data.percentage}%</div>
                <div class="progress-label">Complete</div>
            </div>
        `;
    }

    /**
     * Render quick statistics
     */
    renderQuickStats(data) {
        const container = document.getElementById('quickStats');
        if (!container) return;
        
        container.innerHTML = `
            <div class="stat-box stat-total">
                <div class="stat-value">${data.total}</div>
                <div class="stat-label">Total Controls</div>
            </div>
            <div class="stat-box stat-implemented">
                <div class="stat-value">${data.implemented}</div>
                <div class="stat-label">Implemented</div>
            </div>
            <div class="stat-box stat-in-progress">
                <div class="stat-value">${data.inProgress}</div>
                <div class="stat-label">In Progress</div>
            </div>
            <div class="stat-box stat-remaining">
                <div class="stat-value">${data.remaining}</div>
                <div class="stat-label">Remaining</div>
            </div>
        `;
    }

    /**
     * Render category breakdown
     */
    renderCategoryBreakdown(categoryData) {
        const container = document.getElementById('categoryProgress');
        if (!container) return;
        
        const html = Object.entries(categoryData).map(([category, data]) => {
            const categoryLabel = this.getCategoryLabel(category);
            const progressColor = this.getProgressColor(data.percentage);
            
            return `
                <div class="category-bar">
                    <div class="category-header">
                        <span class="category-name">${categoryLabel}</span>
                        <span class="category-stats">${data.implemented}/${data.total} (${data.percentage}%)</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar">
                            <div class="progress-fill" 
                                 style="width: ${data.percentage}%; background: ${progressColor};"
                                 data-tooltip="${data.implemented} implemented, ${data.inProgress} in progress, ${data.notStarted} not started">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = html;
    }

    /**
     * Get progress color based on percentage
     */
    getProgressColor(percentage) {
        if (percentage >= 80) return '#4caf50'; // Green
        if (percentage >= 50) return '#8bc34a'; // Light green
        if (percentage >= 30) return '#ff9800'; // Orange
        return '#f44336'; // Red
    }

    /**
     * Get category label with icon
     */
    getCategoryLabel(category) {
        const labels = {
            '5': '📂 Organizational',
            '6': '👥 People',
            '7': '🏢 Physical',
            '8': '💻 Technological',
            'organizational': '📂 Organizational',
            'technical': '💻 Technical',
            'operational': '⚙️ Operational',
            'other': '📋 Other'
        };
        return labels[category] || category;
    }

    /**
     * Get current progress data
     */
    getProgressData() {
        return this.progressData || this.calculateProgress();
    }

    /**
     * Render simple progress bar (for compatibility)
     */
    renderSimpleProgressBar(data) {
        // Update existing progress bar if present
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = `${data.percentage}%`;
            progressFill.textContent = `${data.percentage}%`;
        }
        
        // Update stat cards
        const totalControls = document.getElementById('totalControls');
        const implementedCount = document.getElementById('implementedCount');
        const remainingCount = document.getElementById('remainingCount');
        const progressPercent = document.getElementById('progressPercent');
        
        if (totalControls) totalControls.textContent = data.total;
        if (implementedCount) implementedCount.textContent = data.implemented;
        if (remainingCount) remainingCount.textContent = data.remaining;
        if (progressPercent) progressPercent.textContent = `${data.percentage}%`;
    }

    /**
     * Export progress data for reporting
     */
    exportProgressData() {
        const overall = this.calculateProgress();
        const byCategory = this.calculateCategoryProgress();
        
        return {
            overall,
            byCategory,
            timestamp: new Date().toISOString()
        };
    }

    /**
     * Show progress milestone notification
     */
    showMilestoneNotification(percentage) {
        const milestones = [25, 50, 75, 100];
        
        if (milestones.includes(percentage)) {
            const messages = {
                25: '🎉 Great start! 25% complete!',
                50: '🚀 Halfway there! 50% complete!',
                75: '⭐ Almost done! 75% complete!',
                100: '🏆 Congratulations! 100% complete!'
            };
            
            if (window.errorHandler) {
                window.errorHandler.showSuccess(messages[percentage], {
                    duration: 5000,
                    title: 'Milestone Reached!'
                });
            }
        }
    }

    /**
     * Get completion estimates
     */
    getCompletionEstimates() {
        const data = this.getProgressData();
        
        // Simple estimates based on current progress
        const remainingControls = data.remaining;
        const avgTimePerControl = 2; // hours (estimate)
        
        return {
            remainingControls,
            estimatedHours: remainingControls * avgTimePerControl,
            estimatedDays: Math.ceil((remainingControls * avgTimePerControl) / 8)
        };
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.ProgressTracker = ProgressTracker;
}
