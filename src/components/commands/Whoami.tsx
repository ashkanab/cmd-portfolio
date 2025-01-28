import List from "./../elements/List"
import Container from "../elements/Container.tsx";
import {ListItem} from "../Types.tsx";

const me: ListItem[] = [
    // {key: 'Role', value: 'Full-Stack | Backend Specialist'},
    // {key: 'Skills', value: 'Laravel, PHP, Nginx, MySQL, Linux, MongoDB, Docker, React.js, RESTFul APIS, TDD'},
    // {key: 'Location', value: 'Earth 🌍'},
    // {key: 'Email', value: <a href="mailto:abdollahi.workmail@gmail.com">abdollahi.workmail@gmail.com</a>},
    // {key: 'LinkedIn', value: <a target="_blank" href="https://www.linkedin.com/in/ashkan-abdollahi-953338190/">ashkan-abdollahi-953338190</a>},

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