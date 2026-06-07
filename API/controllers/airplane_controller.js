import airplanes from '../airplane_info.js';

function getAll(req, res) {
  res.send(airplanes);
}

function airplaneFilter(searchPlane) {
  let match = airplanes.find((airplane) => {
    return airplane.name === searchPlane;
  });

  if (!match) {
    match = airplanes.filter((airplane) => {
      return String(airplane.id)
        .replace('-', '')
        .includes(searchPlane.replace('-', ''));
    });
  }

  return match || { id: 'not found' };
}

function getAirplane(req, res) {
  const findPlane = airplaneFilter(req.params.airplane);
  res.send(findPlane);
}

export { getAirplane, getAll };
