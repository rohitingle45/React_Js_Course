function Greet() {
    let fullName = () => {
        return "Rohit Mohan Ingle";
    }

    let name = "Rohit";

    return <h2>
        Hello {name} your full name is {fullName()}
    </h2>
}
export default Greet;