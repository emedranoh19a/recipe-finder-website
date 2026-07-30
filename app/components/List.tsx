import IconSecondary from "../ui/IconSecondary";

type ListProps = { listTitle: string, items: string[] }
type ListItemProps = { item: string; }
export default function List({ listTitle, items }: ListProps) {
    return <div>
        <h2 className="preset-4 text-neutral-900">{listTitle}:</h2>
        <ul className="flex flex-col gap-2">{items.map((item, i) => <ListItem key={i} item={item} />)}</ul>
    </div>
}

function ListItem({ item }: ListItemProps) {
    return <li className="flex flex-row gap-2">
        <IconSecondary name="arrow-right" className="w-5 h-5" />
        <span className="">
            {item}
        </span>
    </li>
}