import { useState } from 'react';
import {Divider, List } from 'react-native-paper';
import {View} from "react-native";

export interface ProjectItemProps {
    project: any;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section>
            <List.Accordion
                title={project.number}
                expanded={expanded}
                onPress={handlePress}>
                {project.orders.map((order: any) => <List.Item key={order.id} title={order.number}/>)}
            </List.Accordion>
        </List.Section>
    );
};

export default ProjectItem;