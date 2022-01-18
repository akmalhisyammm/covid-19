import { useState } from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import Select, { SingleValue, StylesConfig } from 'react-select';
import { useCountryList, useCountryStat } from 'hooks/country';
import { SelectCountryList, SWRCountryList, SWRCountryStat } from 'types/country';

import { StatText } from 'components/stats';

const CountrySection = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  const countryStat: SWRCountryStat = useCountryStat(selectedCountry);
  const countryList: SWRCountryList = useCountryList();

  const selectCountryList: SelectCountryList[] = countryList.data?.countries.map((country) => ({
    value: country.name,
    label: country.name,
  }));

  const customSelectStyles: StylesConfig<SelectCountryList, false> = {
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
      fontWeight: '600',
      textAlign: 'left',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black',
      textAlign: 'left',
    }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: 'left',
    }),
  };

  const handleSelectChange = (input: SingleValue<SelectCountryList>) => {
    input ? setSelectedCountry(input.value) : setSelectedCountry('');
  };

  if (countryStat.isError || countryList.isError) return <Text>Failed to Fetch Country Data</Text>;

  return (
    <Box marginY={8}>
      <Text marginBottom={4}>Search by country:</Text>

      <Select
        placeholder="Select Country..."
        value={!selectedCountry ? null : { value: selectedCountry, label: selectedCountry }}
        isLoading={countryStat.isLoading}
        options={selectCountryList}
        onChange={handleSelectChange}
        styles={customSelectStyles}
        isClearable
      />

      {selectedCountry && (
        <SimpleGrid columns={[1, 1, 3]}>
          <StatText
            type="confirmed"
            data={countryStat.data?.confirmed.value}
            isLoading={countryStat.isLoading}
          />
          <StatText
            type="recovered"
            data={countryStat.data?.recovered.value}
            isLoading={countryStat.isLoading}
          />
          <StatText
            type="deaths"
            data={countryStat.data?.deaths.value}
            isLoading={countryStat.isLoading}
          />
        </SimpleGrid>
      )}
    </Box>
  );
};

export default CountrySection;
