import { usePathname } from "expo-router";

export default function useDynamicParam(index: number): string {
    const pathname = usePathname(); // Get the full pathname
    const segments = pathname.split("/"); // Split the pathname into segments
    return segments[index]; // Return the dynamic part at the specified index
}
