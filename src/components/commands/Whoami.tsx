import List from "./../elements/List"
import Container from "../elements/Container.tsx";
import {ListItem} from "../Types.tsx";

const me: ListItem[] = [
    {key: 'Role', value: 'Software Engineer | Backend Specialist'},
    {key: 'Skills', value: 'Laravel, Nginx, MySQL, Linux, MongoDB, Docker, React.js, Tailwind, OOP, TDD, RESTFul APIS'},
    {key: 'Location', value: 'Earth 🌍'},
]

const WhoamiCommand = () => {
    return (
        <Container>
            <p>
                I'm Ashkan Abdollahi, <br/> Laravel Developer with 5+ years of expertise in designing and implementing scalable
                web applications and
                APIs.
                Passionate about solving complex problems, improving systems, and contributing to business growth.
                Adept at using modern PHP coding principles, optimizing database performance, and collaborating with
                teams to deliver robust solutions. I also have some experiences with FrontEnd technologies like React.js ,Next.js and styling Frameworks (Tailwind, Bootstrap).
                <br/>
                Enthusiastic about staying updated on the latest technologies and
                applying them effectively.
            </p>

            <br/>
            <List items={me} type={"full-w"}/>
        </Container>

    );
}

export default WhoamiCommand;