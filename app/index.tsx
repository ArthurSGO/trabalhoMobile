import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { getAuthenticated } from "./auth";

export default function Index() {
    const [ready, setReady] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const isAuthenticated = getAuthenticated();
        setAuthenticated(isAuthenticated);
        setReady(true);
    }, []);

    if (!ready) return null;

    return (
        <>
            {authenticated ? <Redirect href="/(tabs)/home" /> : <Redirect href="/login" />}
        </>
    );
}   