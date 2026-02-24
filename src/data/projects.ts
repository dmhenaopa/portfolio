interface ProjectItem {
    title: string;
    description: string;
    link: string;
    github: string;
    image: string;
    tags: string[];
}

const Projects: ProjectItem[] = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eusimod, aliquam',
        link: '#',
        github: '#',
        image: 'https://placehold.co/850x600',
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eusimod, aliquam',
        link: '#',
        github: '#',
        image: 'https://placehold.co/850x600',
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam eusimod, aliquam',
        link: '#',
        github: '#',
        image: 'https://placehold.co/850x600',
        tags: ['HTML', 'CSS', 'JavaScript'],
    }
]

export { Projects };
