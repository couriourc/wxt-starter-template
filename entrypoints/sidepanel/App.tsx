import {
    AppShell,
    Paper,
    SegmentedControl,
    type SegmentedControlItem,
} from '@mantine/core';
import { useEffect, useMemo, useState } from "react";
import _ from "underscore";
import { Carousel, Embla } from '@mantine/carousel';
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
/*只属于App.tsx的整个全局变量信息*/



export default function App() {
    const [curPageIndex, syncCurPageIndex] = useState<string>("0");
    const Pages = useMemo(() => [
        {
            label: "",
            Component: <></>
        },
    ].map((props, index) => {
        return {
            ...props,
            value: index + ''
        };
    }), []);
    const [embla, setEmbla] = useState<Embla | null>(null);
    useEffect(() => {
        embla?.scrollTo(~~curPageIndex);
    }, [curPageIndex]);
    return <AppShell className={"p-6px box-border relative overflow-hidden"}
    >
        <div className="flex w-99vw overflow-x-hidden flex-col box-border">
            <SegmentedControl
                data={Pages as SegmentedControlItem[]}
                transitionDuration={500}
                value={curPageIndex}
                transitionTimingFunction="linear"
                onChange={syncCurPageIndex}
            />
            <Carousel
                slideSize={{ base: '100%', sm: '50%' }}
                slideGap={{ base: 'xl', sm: 2 }}
                align="start"
                slidesToScroll={1}
                getEmblaApi={setEmbla}
                withControls={false}
                onSlideChange={(index) => {
                    syncCurPageIndex(Pages[index].value);
                }}
            >
                {
                    Pages.map(page => {
                        return <Carousel.Slide key={page.value}>
                            <Paper className={"w-96vw h-95vh overflow-x-hidden"}>{page.Component}</Paper>
                        </Carousel.Slide>;
                    })
                }
            </Carousel>

        </div>
    </AppShell>;
}
