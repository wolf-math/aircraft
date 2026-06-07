import airplanes from '../airplane_info.js';

function manufacturerFilter(searchMan) {
  console.log(searchMan);
  let matches = airplanes.filter((airplane) => {
    return airplane.manufacturer
      .toLowerCase()
      .includes(searchMan.toLowerCase());
  });

  return matches;
}

function getAirplanesByManufacturer(req, res) {
  const findPlanes = manufacturerFilter(req.params.manufacturer);
  res.send(findPlanes);
}

export { getAirplanesByManufacturer };
