
// import type { FunctionComponent, FC } from "react"

import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

// export const RandomFox = () => {
//     return <img></img>
// }

type ImageNative = ImgHTMLAttributes<HTMLImageElement>

type LazyImagesProps = {
    src: string,
};

type Props = LazyImagesProps & ImageNative;

export const LazyImage = ({ src, ...ImgProps }: Props): JSX.Element => {

    // const image: string = `https://randomfox.ca/images/${random()}.jpg`
    const node = useRef<HTMLImageElement>(null);
    const [currentSrc, setCurrentSrc] = useState("");

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry => {
                if (entry.isIntersecting) {
                    setCurrentSrc(src);
                }
            }))
        })


        // console.log(node.current)




        observer.observe(node.current!)

        return () => {
            observer.disconnect();
        }

    }, [src]);

    return <img ref={node} src={currentSrc} {...ImgProps} />
}
// export const RandomFox: FunctionComponent = () => {
//     return <img></img>
// }
// export const RandomFox: FC = () => {
//     return <img></img>
// }