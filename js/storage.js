/**
 * storage.js - LocalStorage Wrapper
 */

const Storage = {
    KEYS: {
        ROUTINES: 'gym_routines',
        SESSIONS: 'gym_sessions',
        SETTINGS: 'gym_settings'
    },

    init() {
        if (!localStorage.getItem(this.KEYS.ROUTINES)) {
            localStorage.setItem(this.KEYS.ROUTINES, JSON.stringify([]));
        }
        if (!localStorage.getItem(this.KEYS.SESSIONS)) {
            localStorage.setItem(this.KEYS.SESSIONS, JSON.stringify([]));
        }
        if (!localStorage.getItem(this.KEYS.SETTINGS)) {
            localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify({
                defaultRestTime: 90
            }));
        }
    },

    // --- Routines ---
    getRoutines() {
        return JSON.parse(localStorage.getItem(this.KEYS.ROUTINES) || '[]');
    },

    // --- Sessions ---
    getSessions() {
        return JSON.parse(localStorage.getItem(this.KEYS.SESSIONS) || '[]');
    },

    // --- Stats Helpers ---
    getStreak() {
        const sessions = this.getSessions().sort((a, b) => new Date(b.date) - new Date(a.date));
        if (sessions.length === 0) return 0;

        let streak = 0;
        let currentDate = new Date();
        currentDate.setHours(0,0,0,0);

        // Very basic streak calculation (can be improved)
        const lastSessionDate = new Date(sessions[0].date);
        lastSessionDate.setHours(0,0,0,0);

        const diffTime = Math.abs(currentDate - lastSessionDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

        if (diffDays > 1) return 0; // Streak broken

        streak = 1;
        for (let i = 1; i < sessions.length; i++) {
            const d1 = new Date(sessions[i-1].date);
            const d2 = new Date(sessions[i].date);
            d1.setHours(0,0,0,0);
            d2.setHours(0,0,0,0);
            const diff = Math.ceil(Math.abs(d1 - d2) / (1000 * 60 * 60 * 24));
            
            if (diff === 1) {
                streak++;
            } else if (diff > 1) {
                break;
            }
        }
        return streak;
    }
};
