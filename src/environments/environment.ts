// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:"localhost:8080",
  baias: [
    {
      name: "Lucas",
      id: 2,
      status: false,
      temperatura: {
        currentTemperature: 20,
        temperatureSet: 26,
        id: 5,
        data: null,
        estado: true,
        descricao: "SensorTemperatura",
        auto: false
      },
      luminosidade: {
        luminosidade: true,
        id: 6,
        data: null,
        estado: true,
        descricao: "SensorIluminação",
        auto: false
      },
      alimento: {
        nivel: 30,
        nivelSet: 60,
        id: 4,
        data: null,
        estado: true,
        descricao: "SensorAlimentação",
        auto: false
      },
      
      agua: {
        nivel: 70,
        nivelSet: 60,
        id: 4,
        data: null,
        estado: true,
        descricao: "SensorAgua",
        auto: true
      },
      age: 0
    },
    {
      name: "Joao",
      id: 1,
      status: true,
      temperatura: {
        currentTemperature: 21,
        temperatureSet: 26,
        id: 2,
        data: null,
        estado: true,
        descricao: "SensorAlimentação",
        auto: true
      },
      luminosidade: {
        luminosidade: false,
        id: 3,
        data: null,
        estado: false,
        descricao: "SensorIluminação",
        auto: false
      },
      alimento: {
        nivel: 50,
        nivelSet: 60,
        id: 1,
        data: null,
        estado: true,
        descricao: "SensorAlimentação",
        auto: true
      },
      agua: {
        nivel: 30,
        nivelSet: 60,
        id: 4,
        data: null,
        estado: true,
        descricao: "SensoraGUA",
        auto: false
      },
      age: 2
    }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
