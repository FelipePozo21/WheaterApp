import { searchWheater } from "./wheater";

export async function searchHook(name, setCoordinates) {
  const URL = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`error ${response.statusText}`);
    }

    const data = await response.json();

    const map = data.results.map((item) => {
      setCoordinates({ lat: item.latitude, long: item.longitude });
    });
    return map;
  } catch (error) {
    throw new Error(error);
  }
}
