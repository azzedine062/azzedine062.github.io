// data/controls-data.js - Combines Base Controls with Azure Mappings

/**
 * Controls Data Manager
 * Combines base controls with Azure mappings
 * Ready to add AWS and GCP later
 */

// Initialize controls immediately when script loads
function initializeControls() {
    try {
        // Check if base controls are loaded
        if (!window.ISO27002_BASE_CONTROLS) {
            console.error('❌ Base controls not loaded');
            return false;
        }
        
        // Check what cloud providers are available
        const hasAzure = !!window.AZURE_CONTROLS_MAPPING;
        const hasAWS = !!window.AWS_CONTROLS_MAPPING;
        const hasGCP = !!window.GCP_CONTROLS_MAPPING;
        
        console.log('🔍 Checking provider availability:');
        console.log('- Azure:', hasAzure ? '✅' : '❌');
        console.log('- AWS:', hasAWS ? '✅' : '❌');
        console.log('- GCP:', hasGCP ? '✅' : '❌');

        // Create combined controls with available cloud mappings
        window.ISO27002_CONTROLS = window.ISO27002_BASE_CONTROLS.map(control => {
            const enhancedControl = { ...control };
            
            // Add cloud mappings object
            enhancedControl.cloudMappings = {};
            
            // Add Azure mapping if available
            if (hasAzure && window.AZURE_CONTROLS_MAPPING[control.id]) {
                enhancedControl.cloudMappings.azure = window.AZURE_CONTROLS_MAPPING[control.id];
            } else {
                enhancedControl.cloudMappings.azure = hasAzure ? 'N/A' : 'Not Loaded';
            }

            // Add AWS mapping if available
            if (hasAWS && window.AWS_CONTROLS_MAPPING[control.id]) {
                enhancedControl.cloudMappings.aws = window.AWS_CONTROLS_MAPPING[control.id];
            } else {
                enhancedControl.cloudMappings.aws = hasAWS ? 'N/A' : 'Not Loaded';
            }

            // Add GCP mapping if available (placeholder for now)
            if (hasGCP && window.GCP_CONTROLS_MAPPING[control.id]) {
                enhancedControl.cloudMappings.gcp = window.GCP_CONTROLS_MAPPING[control.id];
            } else {
                enhancedControl.cloudMappings.gcp = hasGCP ? 'N/A' : 'Not Loaded';
            }
            
            return enhancedControl;
        });

        const loadedProviders = [];
        if (hasAzure) loadedProviders.push('Azure');
        if (hasAWS) loadedProviders.push('AWS');
        if (hasGCP) loadedProviders.push('GCP');

        console.log('✅ Combined controls created:', window.ISO27002_CONTROLS.length, 'controls');
        console.log('🌐 Loaded providers:', loadedProviders.join(', ') || 'None');
        
        // Export utility functions immediately
        window.getControlsByCategory = getControlsByCategory;
        window.searchControls = searchControls;
        window.getControlById = getControlById;
        window.getCategories = getCategories;
        window.getCategoryLabel = getCategoryLabel;
        window.getControlCounts = getControlCounts;
        
        return true;
    } catch (error) {
        console.error('❌ Error initializing controls:', error);
        return false;
    }
}

/**
 * Utility Functions (Backward Compatible)
 */
function getControlsByCategory(category) {
    if (!window.ISO27002_CONTROLS) {
        console.warn('Controls not initialized yet');
        return [];
    }
    
    if (!category) return window.ISO27002_CONTROLS;
    return window.ISO27002_CONTROLS.filter(control => control.category === category);
}

function searchControls(searchTerm) {
    if (!window.ISO27002_CONTROLS) {
        console.warn('Controls not initialized yet');
        return [];
    }
    
    if (!searchTerm) return window.ISO27002_CONTROLS;
    
    const term = searchTerm.toLowerCase();
    return window.ISO27002_CONTROLS.filter(control => 
        control.id.toLowerCase().includes(term) ||
        control.title.toLowerCase().includes(term) ||
        control.implementation.toLowerCase().includes(term) ||
        control.evidence.toLowerCase().includes(term) ||
        (control.cloudMappings && Object.values(control.cloudMappings).some(mapping => 
            mapping && mapping.toLowerCase().includes(term)
        ))
    );
}

function getControlById(id) {
    if (!window.ISO27002_CONTROLS) {
        console.warn('Controls not initialized yet');
        return null;
    }
    
    return window.ISO27002_CONTROLS.find(control => control.id === id) || null;
}

function getCategories() {
    if (!window.ISO27002_CONTROLS) {
        console.warn('Controls not initialized yet');
        return [];
    }
    
    const categories = [...new Set(window.ISO27002_CONTROLS.map(control => control.category))];
    return categories.map(cat => ({
        value: cat,
        label: getCategoryLabel(cat)
    }));
}

function getCategoryLabel(category) {
    const labels = {
        "5": "5 - Organizational",
        "6": "6 - People", 
        "7": "7 - Physical",
        "8": "8 - Technological"
    };
    return labels[category] || category;
}

function getControlCounts() {
    if (!window.ISO27002_CONTROLS) {
        console.warn('Controls not initialized yet');
        return {};
    }
    
    const counts = {};
    window.ISO27002_CONTROLS.forEach(control => {
        counts[control.category] = (counts[control.category] || 0) + 1;
    });
    return counts;
}

// Try to initialize immediately and also set up retries
if (typeof window !== 'undefined') {
    // Try initialization immediately
    if (initializeControls()) {
        console.log('✅ Controls initialized immediately');
    } else {
        console.log('⏳ Dependencies not ready, setting up retry logic...');
        
        // Retry with delays
        setTimeout(() => {
            if (initializeControls()) {
                console.log('✅ Controls initialized after 100ms delay');
            } else {
                console.log('⏳ Still waiting, trying again in 500ms...');
                setTimeout(() => {
                    if (initializeControls()) {
                        console.log('✅ Controls initialized after 600ms delay');
                    } else {
                        console.log('⏳ Last attempt in 1000ms...');
                        setTimeout(() => {
                            if (initializeControls()) {
                                console.log('✅ Controls initialized after 1600ms delay');
                            } else {
                                console.error('❌ Failed to initialize controls after all retries');
                                console.log('Debug info:');
                                console.log('- Base controls available:', !!window.ISO27002_BASE_CONTROLS);
                                console.log('- Azure controls available:', !!window.AZURE_CONTROLS_MAPPING);
                            }
                        }, 1000);
                    }
                }, 500);
            }
        }, 100);
    }
}

// Also listen for DOMContentLoaded as a fallback
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (!window.ISO27002_CONTROLS) {
            console.log('🔄 DOMContentLoaded fallback - trying to initialize controls...');
            initializeControls();
        }
    }, 200);
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeControls,
        getControlsByCategory,
        searchControls,
        getControlById,
        getCategories,
        getCategoryLabel,
        getControlCounts
    };
}