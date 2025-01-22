// hooks/usePageTitle.ts
import { useEffect } from "react";
import { useNavigation } from "expo-router";

export default function usePageTitle(title: string) {
    const navigation = useNavigation();

    useEffect(() => {
        // Listener for focus event
        const focusListener = navigation.addListener('focus', () => {
            document.title = title; // Set the document title when focused
        });

        // Listener for blur event
        const blurListener = navigation.addListener('blur', () => {
            document.title = "My App"; // Reset the document title when unfocused
        });

        // Cleanup listeners on component unmount or re-focus
        return () => {
            focusListener();
            blurListener();
        };
    }, [navigation, title]); // Dependency on title to update when it changes
}
