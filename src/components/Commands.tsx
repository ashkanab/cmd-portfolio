import WhoamiCommand  from "./commands/Whoami.tsx";
import HelpCommand from "./commands/Help.tsx";
import HistoryCommand from "./commands/History.tsx";
import {Command} from "./Types.tsx";
import ClearCommand from "./commands/Clear.tsx";
import ContactCommand from "./commands/Contact.tsx";
import ProjectCommand from "./commands/Projects.tsx";
import MoreCommand from "./commands/More.tsx";
import HeyWeather from "./projects/HeyWeather.tsx";
import VoiceRecorder from "./projects/VoiceRecorder.tsx";
import Nakhchin from "./projects/Nakhchin.tsx";
import Lumina from "./projects/Lumina.tsx";
import SkillTest from "./commands/SkillTest.tsx";

const getCommands: Command[] = [
    {name: 'whoami', description: 'See my personal information', component: WhoamiCommand},
    {name: 'contact', description: 'Contact me', component: ContactCommand},
    {name: 'projects', description: 'My Projects Overview', component: ProjectCommand},
    {name: 'more', description: 'Shows more details about a project', component: MoreCommand},
    {name: 'skills', description: 'Runs skill tests', component: SkillTest, delay: 3000},
    {name: 'history', description: 'User Prompts History', component: HistoryCommand},
    {name: 'help', description: 'List of available commands', component: HelpCommand},
    {name: 'clear', description: 'Clear console', component: ClearCommand},
    {name: 'more heyweather', description: '', component: HeyWeather, isSubcommand: true},
    {name: 'more voicerecorder', description: '', component: VoiceRecorder, isSubcommand: true},
    {name: 'more nakhchin', description: '', component: Nakhchin, isSubcommand: true},
    {name: 'more lumina', description: '', component: Lumina, isSubcommand: true},

    // {name: '', description: ''},
];


export default getCommands;