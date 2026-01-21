// js/view-manager.js - View Mode Management

/**
 * ViewManager Class
 * Handles switching between different view modes: Card, List, Checklist, Kanban
 */
class ViewManager {
    constructor(uiComponents) {
        this.uiComponents = uiComponents;
        this.currentView = this.loadViewPreference() || 'cards';
        this.currentDensity = this.loadDensityPreference() || 'compact';
        this.kanbanDraggedElement = null;
    }

    /**
     * Initialize view manager and bind events
     */
    init() {
        this.bindViewSwitchers();
        this.bindDensitySwitchers();
        this.restoreViewState();
        console.log('✅ ViewManager initialized');
    }

    /**
     * Bind view mode switcher buttons
     */
    bindViewSwitchers() {
        const viewButtons = document.querySelectorAll('.view-btn');
        viewButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const viewType = e.currentTarget.dataset.view;
                this.switchView(viewType);
            });
        });
    }

    /**
     * Bind display density buttons
     */
    bindDensitySwitchers() {
        const densityButtons = document.querySelectorAll('.density-btn');
        densityButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const density = e.currentTarget.dataset.density;
                this.switchDensity(density);
            });
        });
    }

    /**
     * Switch to a different view mode
     */
    switchView(viewType) {
        if (!['cards', 'list', 'checklist', 'kanban'].includes(viewType)) {
            console.error('Invalid view type:', viewType);
            return;
        }

        this.currentView = viewType;
        this.saveViewPreference(viewType);
        
        // Update active button
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === viewType);
        });

        // Trigger re-render
        if (window.app && window.app.filterManager) {
            window.app.filterManager.applyFilters();
        }

        console.log(`Switched to ${viewType} view`);
    }

    /**
     * Switch display density
     */
    switchDensity(density) {
        if (!['comfortable', 'compact', 'dense'].includes(density)) {
            console.error('Invalid density:', density);
            return;
        }

        this.currentDensity = density;
        this.saveDensityPreference(density);
        
        // Update active button
        document.querySelectorAll('.density-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.density === density);
        });

        // Apply density class to container
        const container = document.querySelector('.controls-grid');
        if (container) {
            container.classList.remove('density-comfortable', 'density-compact', 'density-dense');
            container.classList.add(`density-${density}`);
        }

        console.log(`Switched to ${density} density`);
    }

    /**
     * Render controls based on current view
     */
    renderView(controls) {
        const container = document.getElementById('controlsGrid');
        if (!container) return;

        // Clear container
        container.innerHTML = '';
        container.className = 'controls-grid';

        // Add view-specific class
        container.classList.add(`${this.currentView}-view`);
        container.classList.add(`density-${this.currentDensity}`);

        // Render based on view type
        switch (this.currentView) {
            case 'cards':
                this.renderCardsView(controls, container);
                break;
            case 'list':
                this.renderListView(controls, container);
                break;
            case 'checklist':
                this.renderChecklistView(controls, container);
                break;
            case 'kanban':
                this.renderKanbanView(controls, container);
                break;
        }
    }

    /**
     * Render Card View (enhanced default)
     */
    renderCardsView(controls, container) {
        controls.forEach(control => {
            const card = this.uiComponents.createControlCard(control);
            container.appendChild(card);
        });
    }

    /**
     * Render List View (compact one-line items)
     */
    renderListView(controls, container) {
        controls.forEach(control => {
            const listItem = document.createElement('div');
            listItem.className = 'control-list-item';
            
            const status = this.uiComponents.complianceStatus.get(control.id);
            const statusClass = status ? status.status : 'not-started';
            
            listItem.innerHTML = `
                <div class="list-item-checkbox">
                    <input type="checkbox" 
                           ${statusClass === 'implemented' ? 'checked' : ''} 
                           data-control-id="${control.id}"
                           onchange="window.viewManager.handleListItemCheck(this)">
                </div>
                <div class="list-item-id">${this.escapeHtml(control.id)}</div>
                <div class="list-item-title">${this.escapeHtml(control.title)}</div>
                <div class="list-item-status">
                    <span class="status-badge status-${statusClass}">
                        ${this.getStatusLabel(statusClass)}
                    </span>
                </div>
                <div class="list-item-actions">
                    <button class="btn-expand" onclick="window.viewManager.expandListItem('${control.id}')" title="View details">
                        👁️
                    </button>
                </div>
            `;
            
            container.appendChild(listItem);
        });
    }

    /**
     * Render Checklist View (simple task list)
     */
    renderChecklistView(controls, container) {
        // Group by category
        const grouped = this.groupByCategory(controls);
        
        Object.keys(grouped).forEach(category => {
            const categorySection = document.createElement('div');
            categorySection.className = 'checklist-category';
            
            const categoryControls = grouped[category];
            const completed = categoryControls.filter(c => {
                const status = this.uiComponents.complianceStatus.get(c.id);
                return status && status.status === 'implemented';
            }).length;
            
            categorySection.innerHTML = `
                <div class="checklist-category-header">
                    <h3>${this.getCategoryLabel(category)}</h3>
                    <span class="category-progress">${completed}/${categoryControls.length} complete</span>
                </div>
                <div class="checklist-items">
                    ${categoryControls.map(control => this.renderChecklistItem(control)).join('')}
                </div>
            `;
            
            container.appendChild(categorySection);
        });
    }

    /**
     * Render individual checklist item
     */
    renderChecklistItem(control) {
        const status = this.uiComponents.complianceStatus.get(control.id);
        const isChecked = status && status.status === 'implemented';
        
        return `
            <div class="checklist-item ${isChecked ? 'checked' : ''}">
                <label class="checklist-label">
                    <input type="checkbox" 
                           ${isChecked ? 'checked' : ''}
                           data-control-id="${control.id}"
                           onchange="window.viewManager.handleChecklistCheck(this)">
                    <span class="checklist-text">
                        <strong>${this.escapeHtml(control.id)}</strong>
                        ${this.escapeHtml(control.title)}
                    </span>
                </label>
                <button class="btn-details" onclick="window.viewManager.showControlDetails('${control.id}')" title="View details">
                    ℹ️
                </button>
            </div>
        `;
    }

    /**
     * Render Kanban View (drag-drop board)
     */
    renderKanbanView(controls, container) {
        const columns = {
            'not-started': { title: 'Not Started', icon: '⬜' },
            'in-progress': { title: 'In Progress', icon: '⚡' },
            'implemented': { title: 'Implemented', icon: '✅' },
            'not-applicable': { title: 'Not Applicable', icon: '➖' }
        };

        container.classList.add('kanban-board');
        
        Object.keys(columns).forEach(status => {
            const column = document.createElement('div');
            column.className = 'kanban-column';
            column.dataset.status = status;
            
            const columnControls = controls.filter(c => {
                const controlStatus = this.uiComponents.complianceStatus.get(c.id);
                return controlStatus ? controlStatus.status === status : status === 'not-started';
            });
            
            column.innerHTML = `
                <div class="kanban-header">
                    <h3>${columns[status].icon} ${columns[status].title}</h3>
                    <span class="kanban-count">${columnControls.length}</span>
                </div>
                <div class="kanban-cards" 
                     ondrop="window.viewManager.handleKanbanDrop(event, '${status}')"
                     ondragover="window.viewManager.handleKanbanDragOver(event)">
                    ${columnControls.map(c => this.renderKanbanCard(c)).join('')}
                </div>
            `;
            
            container.appendChild(column);
        });
    }

    /**
     * Render Kanban card
     */
    renderKanbanCard(control) {
        return `
            <div class="kanban-card" 
                 draggable="true"
                 data-control-id="${control.id}"
                 ondragstart="window.viewManager.handleKanbanDragStart(event)">
                <div class="kanban-card-id">${this.escapeHtml(control.id)}</div>
                <div class="kanban-card-title">${this.escapeHtml(control.title)}</div>
                <div class="kanban-card-category">
                    ${this.getCategoryLabel(control.category)}
                </div>
            </div>
        `;
    }

    /**
     * Handle Kanban drag start
     */
    handleKanbanDragStart(event) {
        this.kanbanDraggedElement = event.target;
        event.dataTransfer.effectAllowed = 'move';
        event.target.classList.add('dragging');
    }

    /**
     * Handle Kanban drag over
     */
    handleKanbanDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    /**
     * Handle Kanban drop
     */
    handleKanbanDrop(event, newStatus) {
        event.preventDefault();
        
        if (!this.kanbanDraggedElement) return;
        
        const controlId = this.kanbanDraggedElement.dataset.controlId;
        this.kanbanDraggedElement.classList.remove('dragging');
        
        // Update status
        const statusSelect = document.getElementById(`status-${controlId}`);
        if (statusSelect) {
            statusSelect.value = newStatus === 'not-started' ? '' : newStatus;
            statusSelect.dispatchEvent(new Event('change'));
        } else {
            // Direct update if select not found
            this.uiComponents.updateComplianceStatus(controlId, newStatus, '');
        }
        
        // Re-render
        if (window.app && window.app.filterManager) {
            window.app.filterManager.applyFilters();
        }
        
        this.kanbanDraggedElement = null;
    }

    /**
     * Handle list item checkbox
     */
    handleListItemCheck(checkbox) {
        const controlId = checkbox.dataset.controlId;
        const status = checkbox.checked ? 'implemented' : '';
        this.uiComponents.updateComplianceStatus(controlId, status, '');
        
        // Re-render to update
        if (window.app && window.app.filterManager) {
            window.app.filterManager.applyFilters();
        }
    }

    /**
     * Handle checklist checkbox
     */
    handleChecklistCheck(checkbox) {
        const controlId = checkbox.dataset.controlId;
        const status = checkbox.checked ? 'implemented' : '';
        this.uiComponents.updateComplianceStatus(controlId, status, '');
        
        // Update parent item class
        const item = checkbox.closest('.checklist-item');
        if (item) {
            item.classList.toggle('checked', checkbox.checked);
        }
        
        // Update category progress
        this.updateChecklistCategoryProgress(checkbox);
    }

    /**
     * Update checklist category progress
     */
    updateChecklistCategoryProgress(checkbox) {
        const category = checkbox.closest('.checklist-category');
        if (!category) return;
        
        const checkboxes = category.querySelectorAll('input[type="checkbox"]');
        const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
        const total = checkboxes.length;
        
        const progressSpan = category.querySelector('.category-progress');
        if (progressSpan) {
            progressSpan.textContent = `${checked}/${total} complete`;
        }
    }

    /**
     * Show control details in modal/expanded view
     */
    showControlDetails(controlId) {
        // TODO: Implement modal view for control details
        alert(`View details for ${controlId} - Modal coming soon!`);
    }

    /**
     * Expand list item to show details
     */
    expandListItem(controlId) {
        this.showControlDetails(controlId);
    }

    /**
     * Group controls by category
     */
    groupByCategory(controls) {
        return controls.reduce((acc, control) => {
            const category = control.category || 'other';
            if (!acc[category]) acc[category] = [];
            acc[category].push(control);
            return acc;
        }, {});
    }

    /**
     * Get category label
     */
    getCategoryLabel(category) {
        const labels = {
            '5': '📂 Organizational',
            '6': '👥 People',
            '7': '🏢 Physical',
            '8': '💻 Technological',
            'organizational': '📂 Organizational',
            'technical': '💻 Technical',
            'operational': '⚙️ Operational'
        };
        return labels[category] || category;
    }

    /**
     * Get status label
     */
    getStatusLabel(status) {
        const labels = {
            'implemented': '✅ Implemented',
            'in-progress': '⚡ In Progress',
            'partial': '⚡ Partial',
            'not-implemented': '⬜ Not Started',
            'not-applicable': '➖ N/A',
            'not-started': '⬜ Not Started',
            '': '⬜ Not Started'
        };
        return labels[status] || '⬜ Not Started';
    }

    /**
     * Escape HTML
     */
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Save view preference to localStorage
     */
    saveViewPreference(viewType) {
        try {
            localStorage.setItem('compliance-view-mode', viewType);
        } catch (e) {
            console.warn('Could not save view preference:', e);
        }
    }

    /**
     * Load view preference from localStorage
     */
    loadViewPreference() {
        try {
            return localStorage.getItem('compliance-view-mode');
        } catch (e) {
            console.warn('Could not load view preference:', e);
            return null;
        }
    }

    /**
     * Save density preference
     */
    saveDensityPreference(density) {
        try {
            localStorage.setItem('compliance-display-density', density);
        } catch (e) {
            console.warn('Could not save density preference:', e);
        }
    }

    /**
     * Load density preference
     */
    loadDensityPreference() {
        try {
            return localStorage.getItem('compliance-display-density');
        } catch (e) {
            console.warn('Could not load density preference:', e);
            return null;
        }
    }

    /**
     * Restore view state on page load
     */
    restoreViewState() {
        // Set active view button
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === this.currentView);
        });

        // Set active density button
        document.querySelectorAll('.density-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.density === this.currentDensity);
        });

        // Apply density class
        const container = document.querySelector('.controls-grid');
        if (container) {
            container.classList.add(`density-${this.currentDensity}`);
        }
    }

    /**
     * Get current view mode
     */
    getCurrentView() {
        return this.currentView;
    }

    /**
     * Get current density
     */
    getCurrentDensity() {
        return this.currentDensity;
    }
}

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.ViewManager = ViewManager;
}
