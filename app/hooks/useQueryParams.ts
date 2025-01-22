import { useState, useEffect } from "react";
import { Platform } from "react-native";
import * as Linking from "expo-linking";

// Custom hook to extract query parameters
export default function useQueryParams() {
    const [queryParams, setQueryParams] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const getQueryParams = async () => {
            let queryParams: { [key: string]: string } = {};

            // If on Web, use window.location.href
            if (Platform.OS === "web") {
                const url = window.location.href;
                const params = new URLSearchParams(url.split("?")[1]);
                params.forEach((value, key) => {
                    queryParams[key] = value;
                });
            } else {
                // If on iOS or Android, use Linking
                const url = await Linking.getInitialURL();
                if (url) {
                    const params = new URLSearchParams(url.split("?")[1]);
                    params.forEach((value, key) => {
                        queryParams[key] = value;
                    });
                }
            }

            setQueryParams(queryParams);
        };

        getQueryParams();
    }, []);

    return queryParams;
}
