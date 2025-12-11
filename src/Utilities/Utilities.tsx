import { useColorScheme } from "react-native";

class Utils {
    private colorSchema;
    constructor(){
        const schema = useColorScheme()
        this.colorSchema = schema
    }
    
    public isDark(){
        return this.colorSchema === "dark"
    }


}

export default Utils