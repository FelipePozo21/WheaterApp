export function Layout(props) {
  const { min, max, days } = props;
  console.log(min, max, days);
  return (
    <>
      <div>
        <ul>
          {days.map((day, index) => (
            <li key={index}>
              <p>minimo:{min[index]}</p>
              <p>maximo:{max[index]}</p>
              <p>{day}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
