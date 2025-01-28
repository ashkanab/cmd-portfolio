import List from "./../elements/List"
import Container from "../elements/Container.tsx";
import {ListItem} from "../Types.tsx";

const me: ListItem[] = [
    // {key: 'Role', value: 'Full-Stack | Backend Specialist'},
    // {key: 'Skills', value: 'Laravel, PHP, Nginx, MySQL, Linux, MongoDB, Docker, React.js, RESTFul APIS, TDD'},
    // {key: 'Location', value: 'Earth 🌍'},
    {key: 'Email', value: <a href="mailto:abdollahi.workmail@gmail.com">abdollahi.workmail@gmail.com</a>},
    {key: 'LinkedIn', value: <a target="_blank" href="https://www.linkedin.com/in/ashkan-abdollahi-953338190/">ashkan-abdollahi-953338190</a>},
    {key: 'Telegram', value: <a target="_blank" href="https://telegram.me/ashkan_ab">@ashkan_ab</a>},

]

const ContactCommand = () => {
    return (
        <Container>
            <List items={me} type={"default"}/>
        </Container>

    );
}

export default ContactCommand;