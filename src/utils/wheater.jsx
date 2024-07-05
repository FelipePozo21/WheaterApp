export async function searchWheater(
  coordinates,
  setDays,
  setWheaterMax,
  setWheaterMin
) {
  const { long, lat } = coordinates;
  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&language=es`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    const day = data.daily;
    console.log(day);

    setWheaterMax(day.temperature_2m_max);
    setWheaterMin(day.temperature_2m_min);
    setDays(day.time);
  } catch (error) {
    throw new Error(error);
  }
}
