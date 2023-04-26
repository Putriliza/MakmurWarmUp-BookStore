export interface CountryModel {
  createdAt: string,
  name: string,
  _id: string
}

interface CountriesState {
  countries: CountryModel[]
}

export const countries = {
  state: {
    countries: []
  } as CountriesState,
  reducers: {
    setCountries: (state: CountriesState, countries: CountryModel[]) => ({...state, countries}),
  },
  effects: (dispatch: any) => ({
    async fetchCountries(): Promise<void> {
      try {
        const response = await fetch("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries");
        const countries = await response.json();
        dispatch.countries.setCountries(countries);
      } catch (error) {
        console.error(error);
      }
    },
  }),
};

export default countries;