const chicksSection: SectionRoutes[] = [
    { name: "About Us", routeName: "" },
    { name: "Blog", routeName: "" },
    { name: "Bug Bounty", routeName: "" },
];

const supportSection: SectionRoutes[] = [
    { name: "Contact Us", routeName: "" },
    { name: "FAQ", routeName: "" },
    { name: "Sitemap", routeName: "" },
];

const legalSection: SectionRoutes[] = [
    { name: "Privacy Policy", routeName: "" },
    { name: "Terms of Services", routeName: "" },
    { name: "Copyright Policy", routeName: "" },
];

export const sections: Section[] = [
    {
        name: 'Chicks Gold',
        sections: chicksSection
    },
    {
        name: 'Support',
        sections: supportSection
    },
    {
        name: 'Legal',
        sections: legalSection
    }
]

export interface SectionRoutes {
    name: string, 
    routeName: string
}

export interface Section {
    name: string,
    sections: SectionRoutes[]
}