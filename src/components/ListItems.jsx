export default function ListItem(props) {
    return <li>{props.value}</li>;
  }

export default function FactsList(props) {
    const facts = props.numbers;
    const listItems = facts.map((facts) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={facts.toString()} value={facts} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const facts = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke", "Has well over 100k stars on Github",
    "Is maintained by Facebook",
    "Powers thousands of enterprise apps, including mobile apps"
];

root.render(<FactsList facts={facts} />);