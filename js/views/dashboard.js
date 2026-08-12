/**
 * views/dashboard.js
 */

const DashboardView = {
    render(container) {
        const greeting = UI.getGreeting();
        const streak = Storage.getStreak();
        const sessions = Storage.getSessions();
        const totalSessions = sessions.length;
        
        // Let's assume a static user name for now
        const userName = 'Atleta';

        let lastSessionHTML = `<p class="text-muted">No has registrado ninguna sesión aún.</p>`;
        
        if (totalSessions > 0) {
            // Get last session
            const lastSession = sessions.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
            const dateStr = new Date(lastSession.date).toLocaleDateString('es-ES', { weekday: 'short', month: 'short', day: 'numeric' });
            
            lastSessionHTML = `
                <div class="card" style="margin-top: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span style="font-weight: 600;">${lastSession.routineName || 'Sesión libre'}</span>
                        <span class="text-muted" style="font-size: 12px;">${dateStr}</span>
                    </div>
                    <p class="text-secondary" style="font-size: 14px;">
                        ${lastSession.exercises ? lastSession.exercises.length : 0} ejercicios completados
                    </p>
                </div>
            `;
        }

        const html = `
            <div class="dash-header">
                <h2>${greeting}, <span style="color: var(--accent-primary)">${userName}</span>!</h2>
                <p class="text-secondary">¿Listo para destruir tus límites hoy?</p>
            </div>

            <div class="dash-stats-grid">
                <div class="stat-box card" style="margin-bottom: 0;">
                    <div class="value">🔥 ${streak}</div>
                    <div class="text-secondary" style="font-size: 12px; margin-top: 4px;">Días seguidos</div>
                </div>
                <div class="stat-box card" style="margin-bottom: 0;">
                    <div class="value">📈 ${totalSessions}</div>
                    <div class="text-secondary" style="font-size: 12px; margin-top: 4px;">Entrenamientos</div>
                </div>
            </div>

            <div style="margin-bottom: var(--space-lg);">
                <a href="#/session" class="btn-primary" style="text-decoration: none;">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Iniciar Entrenamiento
                </a>
            </div>

            <div>
                <h3>Último Entrenamiento</h3>
                ${lastSessionHTML}
            </div>
        `;

        container.innerHTML = html;
    }
};
