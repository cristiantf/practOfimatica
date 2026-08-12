/**
 * ui.js - Shared UI components and utilities
 */

const UI = {
    generateId(prefix = 'id') {
        return `${prefix}_${new Date().getTime()}_${Math.random().toString(36).substr(2, 5)}`;
    },

    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        // Simple inline styles for toast since we didn't add it in css yet
        toast.style.cssText = `
            background: var(--bg-card);
            border-left: 4px solid var(--${type === 'info' ? 'accent-primary' : type});
            padding: var(--space-md);
            margin-bottom: var(--space-sm);
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            animation: slideUp 0.3s ease-out;
            color: var(--text-primary);
        `;
        toast.textContent = message;

        container.appendChild(toast);

        // Remove after 3s
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    // A simple greeting based on time
    getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return 'Buenos días';
        if (hour < 19) return 'Buenas tardes';
        return 'Buenas noches';
    }
};
