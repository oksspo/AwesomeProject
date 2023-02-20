import {FlatList, View} from "react-native";
import { Appbar } from 'react-native-paper';
import { PROJECTS } from "../data";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Projects" />
            </Appbar.Header>
            <FlatList
                data={PROJECTS}
                renderItem={({item}) => <ProjectItem project={item} />}
                keyExtractor={item => item.id}
            />
        </View>
      );
}

export default ProjectList;