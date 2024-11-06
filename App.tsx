import {Provider} from "react-redux";
import {store} from "./store";
import {CleanCar} from "./src/screens/CleanCar";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from "react-native-paper";

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <PaperProvider>
                        <CleanCar/>
                </PaperProvider>
            </SafeAreaProvider>
        </Provider>
    );
}
