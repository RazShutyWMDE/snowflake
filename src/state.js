
export const emptyState = (): SnowflakeAppState => {
    return {
        name: '',
        title: '',
        milestoneByTrack: {
            'WEB_CLIENT': 0,
            'FOUNDATIONS': 0,
            'SERVERS': 0,
            'PROJECT_MANAGEMENT': 0,
            'COMMUNICATION': 0,
            'CRAFT': 0,
            'INITIATIVE': 0,
            'CAREER_DEVELOPMENT': 0,
            'ORG_DESIGN': 0,
            'WELLBEING': 0,
            'ACCOMPLISHMENT': 0,
            'MENTORSHIP': 0,
            'EVANGELISM': 0,
            'RECRUITING': 0,
            'COMMUNITY': 0
        },
        focusedTrackId: 'SERVERS'
    }
};

export const defaultState = (): SnowflakeAppState => {
    return {
        name: '',
        title: 'Junior Software Engineer',
        milestoneByTrack: {
            'WEB_CLIENT': 0,
            'FOUNDATIONS': 0,
            'SERVERS': 0,
            'PROJECT_MANAGEMENT': 0,
            'COMMUNICATION': 0,
            'CRAFT': 0,
            'INITIATIVE': 0,
            'CAREER_DEVELOPMENT': 0,
            'ORG_DESIGN': 0,
            'WELLBEING': 0,
            'ACCOMPLISHMENT': 0,
            'MENTORSHIP': 0,
            'EVANGELISM': 0,
            'RECRUITING': 0,
            'COMMUNITY': 0
        },
        focusedTrackId: 'SERVERS'
    }
};
