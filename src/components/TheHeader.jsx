import bookinLogo from "./bookin-logo.svg"

export default function TheHeader(props) {
    console.log(props.title);
    return (
        <header>
            <nav>
                <img src={bookinLogo} width="130    px" alt="Bookin logo" />
                <h2>{props.title}</h2>
            </nav>
        </header>
    );
}