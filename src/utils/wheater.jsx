export async function searchWheater(
  coordinates,
  setDays,
  setWheaterMax,
  setWheaterMin
) {
  const { long, lat } = coordinates;
  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&language=es`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    const day = data.daily;

    setWheaterMax(day.temperature_2m_max);
    setWheaterMin(day.temperature_2m_min);
    setDays(day.time);
    console.log(day.precipitation_probability_max)
    console.log(day.wind_speed_10m_max)
  } catch (error) {
    throw new Error(error);
  }
}
