import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Сonversion",
        to: "/"
    },
    {
        id: nanoid(),
        text: "Current courses",
        to: "/rates"
    }
];

export default items;