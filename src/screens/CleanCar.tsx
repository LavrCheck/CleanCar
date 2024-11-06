import {StyleSheet} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddSection} from "../components/AddSection";
import {TaskList} from "../components/taskList/TaskList";

export const CleanCar = () => {
    return <>
        <SafeAreaView style={s.CleanCar}>
            <AddSection/>
            <TaskList/>
        </SafeAreaView>
    </>
}


const s = StyleSheet.create({
    CleanCar: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    }
})