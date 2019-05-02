import congregationsRaw from './congregations.xml';

// eslint-disable-next-line import/prefer-default-export
export const getCongregations = async () => {
  try {
    const {
      markers: { marker },
    } = congregationsRaw;

    return marker.map(({ name, address, custom1, custom2, lat, lng }) => ({
      name: name[0],
      address: address[0],
      congregationCode: custom1[0]._,
      area: custom2[0]._,
      lat: lat[0],
      lng: lng[0],
    }));
  } catch (error) {
    return [];
  }
};
