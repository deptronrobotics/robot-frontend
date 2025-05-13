import type {Metadata, NextPage} from "next";
import "../styles/globals.css";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "Deptron Robotics",
    description: "Created by YTU Mint",
};

interface IProps {
    readonly children: ReactNode;
}

const RootLayout: NextPage<IProps> = ({
    children,
}) => {
    return (
        <html lang="en">
        <body>

        {children}
        </body>
        </html>
    );
}

export default RootLayout;
