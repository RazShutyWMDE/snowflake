import { hashToState } from "../src/hash";

describe('hash', () => {
    it('parses a valid hash correctly to a valid state', () => {
        const testHash = '#1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,Jane Doe,Engineering Manager';

        const actualState = hashToState(testHash);

        expect(actualState).toEqual({
            name: 'Jane Doe',
            title: 'Engineering Manager',
            milestoneByTrack: {
                'WEB_CLIENT': 1,
                'FOUNDATIONS': 3,
                'SERVERS': 2,
                'PROJECT_MANAGEMENT': 4,
                'COMMUNICATION': 5,
                'CRAFT': 0,
                'INITIATIVE': 1,
                'CAREER_DEVELOPMENT': 2,
                'ORG_DESIGN': 3,
                'WELLBEING': 4,
                'ACCOMPLISHMENT': 5,
                'MENTORSHIP': 0,
                'EVANGELISM': 1,
                'RECRUITING': 2,
                'COMMUNITY': 3,
            },
            focusedTrackId: 'SERVERS'
        });
    });
});
