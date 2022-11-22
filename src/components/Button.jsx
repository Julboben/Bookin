import './Button.css';
/* DONT Use inline css - what to do with hover, focus? */

export default function Button(props) {
    return (
        <button onClick={props.onClick} className={"button " + (props.primary ? "button-primary" : "" || props.secondary ? "button-secondary" : "")}>{props.title}</button>
    )
};