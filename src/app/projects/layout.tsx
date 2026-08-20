import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work",
    description:
        "Client sites and personal builds by Alabo Excel — React, Next.js, and Node.js projects.",
};

export default function ProjectsLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return children;
}
