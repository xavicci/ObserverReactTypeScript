// import type { FunctionComponent, FC } from "react"

// export const RandomFox = () => {
//     return <img></img>
// }
export const RandomFox = (): JSX.Element => {
    const random = () => Math.floor(Math.random() * 123) + 1;

    const image: string = `https://randomfox.ca/images/${random()}.jpg`

    return <img width={320} height='auto' className='rounded' src={image} />
}
// export const RandomFox: FunctionComponent = () => {
//     return <img></img>
// }
// export const RandomFox: FC = () => {
//     return <img></img>
// }