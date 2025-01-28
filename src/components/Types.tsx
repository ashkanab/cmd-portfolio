import React from "react";

export interface History {
    prompt: string;
    output: React.ReactNode;
    visible: boolean;
}
export interface Command {
    name: string;
    description: string;
    component: React.FC;
    isSubcommand?: boolean;
}

export interface ListItem {
    key: string;
    value: React.ReactNode;
}