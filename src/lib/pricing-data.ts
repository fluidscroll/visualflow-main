
export const tiers = [
        {
            name: 'One Pager',
            id: 'tier-lite',
            price: 'From £4,000',
            productionTime: '3+ weeks turnaround',
            description: 'Perfect for simple, focused learning content',
            wordLimit: '1,000 words',
            consultation: 'Up to 3 hours',
            interactiveFeatures: 'Basic',
            multimedia: '1 hour',
            animatedExplainers: 'Quote on request',
            bespokeGraphics: '✗',
            featured: false,
        },
        {
            name: 'Standard',
            id: 'tier-standard',
            price: '£Quote',
            productionTime: '6+ weeks turnaround',
            description: 'Ideal for comprehensive learning modules',
            wordLimit: '2,500 words / 30mins-1hr',
            consultation: 'Up to 2 days',
            interactiveFeatures: 'Basic',
            multimedia: '2 days production time',
            animatedExplainers: 'Quote on request',
            bespokeGraphics: '✗',
            featured: true,
        },
        {
            name: 'Advanced',
            id: 'tier-advanced',
            price: '£Quote',
            productionTime: '12+ weeks',
            description: 'Advanced learning experiences with rich media',
            wordLimit: '4,000 words / 1hr',
            consultation: 'Up to 4 days',
            interactiveFeatures: 'Advanced',
            multimedia: 'Up to 5 days production time',
            animatedExplainers: 'Quote on request',
            bespokeGraphics: 'Simple illustrations',
            featured: false,
        },
        {
            name: 'Premium',
            id: 'tier-premium',
            price: '£Quote',
            productionTime: '12+ weeks',
            description: 'Full-scale custom e-learning solutions',
            wordLimit: '6,000 words / 1.5hr',
            consultation: 'Up to 7 days',
            interactiveFeatures: 'Advanced/Custom',
            multimedia: 'Up to 10 days production time + 4K video',
            animatedExplainers: 'Quote on request',
            bespokeGraphics: 'Simple illustrations',
            featured: false,
        }
    ];

    export const featureSections = [
        {
            id: 'core',
            name: 'Core Features',
            features: [
                {
                    name: 'Word limit / Course time limit',
                    values: tiers.map(tier => tier.wordLimit)
                },
                {
                    name: 'Production time',
                    values: tiers.map(tier => tier.productionTime)
                },
                {
                    name: 'Building of platform',
                    values: ['✓', '✓', '✓', '✓']
                },
                {
                    name: 'Branding (logos & colours)',
                    values: ['✓', '✓', '✓', '✓']
                }
            ]
        },
        {
            id: 'learning',
            name: 'Learning Design',
            features: [
                {
                    name: 'Consultation',
                    values: tiers.map(tier => tier.consultation)
                },
                {
                    name: 'Interactive features',
                    values: tiers.map(tier => tier.interactiveFeatures)
                }
            ]
        },
        {
            id: 'multimedia',
            name: 'Multimedia Content',
            features: [
                {
                    name: 'Video, Photography & Audio',
                    values: tiers.map(tier => tier.multimedia)
                },
                {
                    name: 'Animated explainers',
                    values: tiers.map(tier => tier.animatedExplainers)
                },
                {
                    name: 'Bespoke graphics',
                    values: tiers.map(tier => tier.bespokeGraphics)
                }
            ]
        }
    ];