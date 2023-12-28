import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "./lib/utils";

function App() {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setHidden((hidden) => !hidden);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <main className="min-h-[100dvh] w-full grid place-items-center">
                <div className="flex flex-col space-y-16">
                    <div
                        className={cn([
                            "items-top flex space-x-4",
                            hidden ? "hidden" : "",
                        ])}
                    >
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </div>

                    <div
                        className={cn([
                            "items-top flex space-x-2",
                            !hidden ? "hidden" : "",
                        ])}
                    >
                        <Checkbox id="terms1" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                    </div>

                    {/* <Button variant="outline">Button</Button> */}
                </div>
            </main>
        </>
    );
}

export default App;
