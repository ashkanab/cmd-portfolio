import List from "./../elements/List"
import Container from "../elements/Container.tsx";
import getCommands from "../Commands.tsx";
import {ListItem} from "../Types.tsx";

const HelpCommand = () => {

    const commands = getCommands;

    return (
        <Container>
            <List items={
                commands.filter((cmd): boolean => !cmd.isSubcommand).map((cmd): ListItem => {
                    return {key: cmd.name, value: cmd.description}
                })
            }/>
        </Container>
    );
}

export default HelpCommand;