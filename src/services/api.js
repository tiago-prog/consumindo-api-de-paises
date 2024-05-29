import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/';

export default async (service, filter) => {
  let search = `${baseUrl}/all`;
  if (filter) {
    const regex = new RegExp(/[a-zA-Z]/);
    const validFilter = regex.test(filter);

    search = validFilter ? `${baseUrl}/${service}/${filter}` : `${baseUrl}/all`;
  }

  const response = await axios.get(search)
    .then((res) => res.data)
    .then((data) => data.reduce((acumulator, contry, index) => {
      if (index < 20) {
        acumulator.push({
          id: (index + 1),
          flag: contry.flags.png,
          name: contry.translations.por.common,
          population: contry.population,
          region: contry.region,
          subregion: contry.subregion,
          capital: contry.capital,
          nativeName: contry.name.nativeName,
          topLevelDomain: contry.tld,
          currencies: contry.currencies,
          languages: contry.languages,
          borders: contry.borders,
        });
      }
      return acumulator;
    }, [])).catch((error) => {
      if (error.response && error.response.status === 404) {
        console.clear();
        return [];
      }
    });

  return response;
};
