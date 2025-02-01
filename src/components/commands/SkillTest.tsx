import {useState, useEffect} from "react";
import Container from "../elements/Container.tsx";
import List from "../elements/List.tsx";
import {ListItem} from "../Types.tsx";

const tests = [
    {
        file: 'Tests\\Unit\\Skills\\LaravelTest',
        methods: [
            "I have more than 5 years of experience in Laravel development",
            "I am professional in using Laravel for building RESTful APIs",
            "I have expertise in designing and optimizing database schemas using Laravel Eloquent",
            "I am skilled in implementing authentication and authorization systems (e.g., JWT, OAuth, Sanctum)",
            "I have experience in writing clean, maintainable, and testable code",
            "I am adept at using Laravel queues for background job processing",
            "I have integrated third-party APIs and payment gateways (e.g., Stripe)",
            "I have built scalable and secure web applications using Laravel",
            "I am familiar with Laravel testing tools like PHPUnit and Pest",
            "I have experience with Laravel Livewire for dynamic front-end interactions",
            "I have optimized Laravel applications for performance using caching (Redis)",
        ]
    },
    {
        file: "Tests\\Unit\\Skills\\DatabaseTest",
        methods: [
            "I have extensive experience working with relational databases like MySQL and PostgreSQL",
            "I have worked with NoSQL databases like MongoDB for scalable and flexible data storage",
            "I have experience optimizing database performance through indexing, query optimization, and caching",
            "I am familiar with database backup and recovery strategies",
        ]
    },
    {
        file: "Tests\\Unit\\Skills\\DevOpsTest",
        methods: [
            "I have experience configuring and managing Nginx web server",
            "I am proficient in Linux system administration and shell scripting",
            "I am skilled in containerizing applications using Docker and Docker Compose",
            "I am proficient in setting up CI/CD pipelines using GitHub Actions",
            "I am familiar with monitoring and logging using Grafana, Prometheus, and ELK Stack (Elasticsearch, Logstash, Kibana)",
            "I have configured and managed reverse proxies and load balancers for high-traffic applications",
            "I am proficient in managing and securing Linux servers (e.g., firewalls, SSH, user permissions)",
            "I have worked with message brokers like RabbitMQ and Redis for asynchronous task processing",
            "I have implemented automated backup and disaster recovery strategies",
            "I am skilled in performance tuning and scaling applications using caching (Redis, Memcached)",
        ]
    },
    {
        file: "Tests\\Unit\\Skills\\BestPracticesTest",
        methods: [
            "I am proficient in applying SOLID principles to write clean, maintainable, and scalable code",
            "I have experience with Object-Oriented Programming (OOP) concepts like inheritance, polymorphism, and encapsulation",
            "I am skilled in using design patterns such as Singleton, Factory, Observer, and Strategy",
            "I have implemented Test-Driven Development (TDD) to ensure high-quality and bug-free code",
            "I am experienced in writing unit tests, integration tests, and end-to-end tests using tools like PHPUnit and Pest",
            "I have worked with Dependency Injection (DI) and Inversion of Control (IoC) for modular and testable code",
            "I am proficient in writing clean code following principles like DRY and KISS",
            // "I am skilled in using version control systems like Git and following collaborative workflows (e.g., GitFlow)",
            // "I am familiar with Agile methodologies like Scrum and Kanban for iterative development",
            // "I have experience with pair programming and code reviews to ensure code quality",
            // "I am proficient in using CI/CD pipelines to automate testing and deployment processes",
            "I have worked with modular and reusable code architecture to reduce technical debt",
            "I am experienced in documenting code and APIs for better collaboration and maintenance",
            // "I am skilled in debugging and profiling applications to identify and resolve performance bottlenecks",
            "I have implemented coding standards and style guides (e.g., PSR standards in PHP)",
            // "I am familiar with microservices architecture and its best practices",
            // "I have experience with event-driven architecture and message-based communication",
            "I am proficient in using tools like PHPStan and Psalm for static code analysis"
        ]
    },
    {
        file: "Tests\\Unit\\Skills\\FrontEndTest",
        methods: [
            "I am familiar with using React.js and Next.js",
            "I have familiar with server-side rendering (SSR) and static site generation (SSG) in Next.js",
            "I am skilled in building responsive and mobile-first websites using Tailwind CSS and Bootstrap",
            "I am experienced in building reusable and modular UI components",
            "I am familiar with front-end routing using React Router and Next.js routing",
            "I have experience with CSS preprocessors like SASS",
            "I am familiar with front-end deployment tools like Vercel",
        ]
    }
];

const result: ListItem[] = [
    {
        key: <span className={'text-[#797979]'}>Tests:</span>,
        value: (
            <p className={'inline-block'}>
                <span className={'text-green-600 font-bold'}>37 passed</span>
                <span className={'ml-2 text-[#797979]'}>(143 assertions)</span>
            </p>
        )
    },
    {
        key: <span className={'text-[#797979]'}>Duration:</span>,
        value: parseFloat((Math.random() * (3 - 2) + 2).toFixed(2))
    }
]

const SkillTest = () => {
    const [completed, setCompleted] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCompleted(true);
        }, 3000); // Adjust speed of test execution

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Container>
            {
                completed ?

                    <>
                        {
                            tests.map((test) => {
                                return (
                                    <>
                                        <p>
                                    <span className={"bg-green-600 text-black text-xs font-bold px-2 py-0 mr-2"}>
                                    PASS
                                    </span>
                                            {test.file}
                                        </p>
                                        {
                                            test.methods.map((method) => {

                                                return (
                                                    <p className={"text-[#797979]"}>
                                                        <span className={"text-green-600 font-bold mr-2"}>✓</span>
                                                        {method}
                                                    </p>
                                                )
                                            })
                                        }
                                        <br/>
                                    </>
                                )
                            })
                        }
                        <br/>

                        <List items={result}/>
                    </>

                    :
                    null
            }
        </Container>
    );
};

export default SkillTest;
