import { Text,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
    return (
        <SafeAreaView className="px-4 my-6 bg-primary h-full">
            <Text className="text-2xl text-white font-psemibold">Bookmark</Text>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#fff', textAlign: 'center' }}>No Videos Bookmarked yet!</Text>
            </View>
        </SafeAreaView>
        
    );
};

export default Bookmark;