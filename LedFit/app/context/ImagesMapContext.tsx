import React, { createContext, useState, useEffect } from "react";

interface ImagesMap {
  [key: string]: any;
}

interface ImagesMapContextValue {
  imagesMap: ImagesMap;
}

export const ImagesMapContext = createContext<ImagesMapContextValue>({
  imagesMap: {},
});

export function ImagesMapProvider({ children }: { children: React.ReactNode }) {
  const [imagesMap, setImagesMap] = useState<ImagesMap>({});
  useEffect(() => {
    const imagesMap: { [key: string]: any } = {
      functionalStrengthImage: require("../../assets/functionalStrengthImage.png"),
      hathaYogaImage: require("../../assets/hathaYogaImage.png"),
      potenciaEnCadenaImage: require("../../assets/potenciaEnCadenaImage.png"),
      amrapImage: require("../../assets/amrapImage.png"),
      tabataImage: require("../../assets/tabataImage.png"),
      sinDescansoImage: require("../../assets/sinDescansoImage.png"),
      fundamentosImage: require("../../assets/fundamentosImage.png"),

      // Ejercicios individuales
      warrior1: require("../../assets/exercises/warrior1.png"),
      rest: require("../../assets/exercises/rest.png"),
      sidePlank: require("../../assets/exercises/sidePlank.png"),
      oneLegDown: require("../../assets/exercises/oneLegDown.png"),
      halfMoonPose: require("../../assets/exercises/halfMoonPose.png"),
      trianglePose: require("../../assets/exercises/trianglePose.png"),
      wheelPose: require("../../assets/exercises/wheelPose.png"),
      camelPose: require("../../assets/exercises/camelPose.png"),
      oneLegUp: require("../../assets/exercises/oneLegUp.png"),
      oneLegHead: require("../../assets/exercises/oneLegHead.png"),
      strokePose: require("../../assets/exercises/strokePose.png"),

      // Iconos de notificaciones
      notificationTick: require("../../assets/icons/notificationTick.png"),
      notificationPlus: require("../../assets/icons/notificationPlus.png"),
      notificationTime: require("../../assets/icons/notificationTime.png"),
    };
    setImagesMap(imagesMap);
  }, []);

  return (
    <ImagesMapContext.Provider value={{ imagesMap }}>
      {children}
    </ImagesMapContext.Provider>
  );
}

export default ImagesMapContext;
