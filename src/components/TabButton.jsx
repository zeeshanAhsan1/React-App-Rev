export default function TabButton(props) {
  function handleClick() {
    console.log("Button Clicked");
  }

  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}
