import React from "react";

export interface History {
    prompt: string | null;
    output: React.ReactNode;
    visible: boolean;
}
export interface Command {
    name: string;
    description: string;
    component: React.FC;
    isSubcommand?: boolean;
    delay?: number;
}

export interface ListItem {
    key: React.ReactNode;
    value: React.ReactNode;
}