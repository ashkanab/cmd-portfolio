import {useState, useEffect} from "react";
import Container from "./Container.tsx";
import {ListItem} from "../Types.tsx";
import List from "../elements/List.tsx";

const Logs = () => {
    const [showContent, setShowContent] = useState(false);

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
            timeZoneName: "short",
        }).format(date);
    };

    const now = new Date();

    const calculateUptime = (now: Date) => {

        const startTime = new Date("2025-01-18T10:00:00");
        const diffInSeconds = Math.floor((now.getTime() - startTime.getTime()) / 1000); // Difference in seconds
        const days = Math.floor(diffInSeconds / (60 * 60 * 24));
        const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);

        return `${days} days, ${hours} hours, ${minutes} minutes`;
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowContent(true);
        }, 3000);

        return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }, []);

    const statistics: ListItem[] = [
        {
            key: 'OS:',
            value: 'Ubuntu 22.04.3 LTS'
        },
        {
            key: 'Host:',
            value: 'Laravel Dev Machine'
        },
        {
            key: 'Kernel:',
            value: '5.15.0-1038-aws'
        },
        {
            key: 'Uptime:',
            value: calculateUptime(now)
        },
        {
            key: 'Users logged in:',
            value: '1'
        },
        {
            key: 'Processes:',
            value: '183'
        },
        {
            key: 'Memory Usage:',
            value: '4.2GB / 8GB'
        },
        {
            key: 'Disk Usage:',
            value: '47% used of 256GB'
        },
        {
            key: 'CPU:',
            value: 'Intel i7-12700K @ 3.60GHz'
        }
    ];



    return (
        <>
            {
                showContent ?
                    <>
                        <p>Welcome to My Portfolio!<br/></p>

                        <Container>
                            <p>
                                System information as of {formatDate(now)}
                            </p>

                            <Container>
                                <List items={statistics} type={'default'}/>
                            </Container>

                        </Container>

                        <br/>
                        <p>Use command 'help' to see list of available commands</p>
                    </>

                    :
                    <p>Connecting....</p>
            }
        </>
    );

}

export default Logs;