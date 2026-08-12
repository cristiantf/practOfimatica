/**
 * app.js - Main Application Router & Entry Point
 */

const App = {
    rootElement: document.getElementById('app'),
    routes: {
        '#/': 'dashboard',
        '#/routines': 'routines',
        '#/session': 'session',
        '#/history': 'history',
        '#/stats': 'stats'
    },

    init() {
        // Init storage
        Storage.init();

        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Initial route handling
        if (!window.location.hash) {
            window.location.hash = '#/';
        } else {
            this.handleRoute();
        }
    },

    handleRoute() {
        const hash = window.location.hash || '#/';
        const view = this.routes[hash] || 'dashboard';

        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const activeNav = document.getElementById(`nav-${view}`);
        if (activeNav) activeNav.classList.add('active');

        // Render View
        this.renderView(view);
    },

    renderView(view) {
        this.rootElement.innerHTML = '<div class="loading-state">Cargando...</div>';
        
        // In a real app we'd probably load view scripts dynamically or have them bundled.
        // For this simple SPA, we assume global objects like DashboardView are available.
        try {
            switch(view) {
                case 'dashboard':
                    if (typeof DashboardView !== 'undefined') {
                        DashboardView.render(this.rootElement);
                    } else {
                        this.rootElement.innerHTML = `<h2>Dashboard</h2><p>View not implemented yet.</p>`;
                    }
                    break;
                case 'routines':
                    this.rootElement.innerHTML = `<h2>Rutinas</h2><p>Módulo en desarrollo (Sprint 1)</p>`;
                    break;
                case 'session':
                    this.rootElement.innerHTML = `<h2>Sesión en Vivo</h2><p>Módulo en desarrollo (Sprint 2)</p>`;
                    break;
                case 'history':
                    this.rootElement.innerHTML = `<h2>Historial</h2><p>Módulo en desarrollo (Sprint 3)</p>`;
                    break;
                case 'stats':
                    this.rootElement.innerHTML = `<h2>Estadísticas</h2><p>Módulo en desarrollo (Sprint 4)</p>`;
                    break;
                default:
                    this.rootElement.innerHTML = `<h2>Error 404</h2><p>Vista no encontrada.</p>`;
            }
        } catch (e) {
            console.error(e);
            this.rootElement.innerHTML = `<div class="loading-state" style="color:var(--error)">Error cargando vista.</div>`;
        }
    }
};

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
