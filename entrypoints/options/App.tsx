import React, { ReactNode, Suspense, useState } from "react";
import { Avatar, Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";
import { Logo, LogoWithName } from "@/shared/components/Logo.tsx";
import { cx } from "@emotion/css";
import { AppShell, Burger, List } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { RouterView, Sidebars, TRoutes } from "@/entrypoints/options/router";
import { noop } from "underscore";
import { LoadingPage } from "@/shared/components/Loading";

interface PageViewProps {
}

function PageView({ }: PageViewProps) {
    const [opened, { toggle }] = useDisclosure();
    const [curActive, setCurActive] = useState<TRoutes>(Sidebars[1].path);
    return (
        <Card className={"w-full h-100vh"}>
            <CardHeader className={cx("flex  z-0 top-1 !items-center justify-center")}>

            </CardHeader>
            <CardBody className={"z-10  "}>

                <AppShell
                    header={{ height: 48 }}
                    navbar={{
                        width: 300,
                        breakpoint: 'sm',
                        collapsed: { mobile: !opened },
                    }}
                    padding="md"
                >
                    <AppShell.Header className={"flex items-center justify-between"}>
                        <div className={"flex items-center"}>
                            <Burger
                                opened={opened}
                                onClick={toggle}
                                hiddenFrom="sm"
                                size="sm"
                            />
                            <div>
                                <LogoWithName></LogoWithName>
                            </div>
                        </div>
                        <div className={"px-12px"}>
                            <Avatar size={"sm"}
                                isBordered
                                className={"cursor-pointer"}
                                icon={<Logo />}
                            />
                        </div>
                    </AppShell.Header>

                    <AppShell.Navbar p="md" bg={"white"}>
                        <List
                            spacing="xs"
                            size="sm"
                            center
                        >
                            {
                                Sidebars.map(({ title, tap, path }) => {
                                    const _tap = tap ?? noop;
                                    return <List.Item key={path}>
                                        <div
                                            onClick={() => {
                                                setCurActive(path);
                                                _tap();
                                            }}
                                            className={
                                                cx("flex cursor-pointer border-solid w-full h-24px items-center hover:text-blue duration-200",
                                                    path.toLowerCase(),
                                                    {
                                                        "text-blue active": curActive === path
                                                    },
                                                )
                                            }
                                        >
                                            {title as ReactNode}
                                        </div>
                                    </List.Item>;
                                })
                            }
                            <List.Item></List.Item>
                        </List>
                    </AppShell.Navbar>
                    <AppShell.Main>
                        <RouterView path={curActive!} />
                    </AppShell.Main>
                </AppShell>
                <div className={"flex gap-1"}>
                </div>
            </CardBody>
        </Card>
    );
}


export default function App() {
    return <>
        <Suspense fallback={<LoadingPage />}>
            <PageView ></PageView>
        </Suspense>
    </>;

}
