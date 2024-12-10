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
      amrapImage: require("../../assets/AMRAPImage.png"),
      tabataImage: require("../../assets/tabataImage.png"),
      sinDescansoImage: require("../../assets/sinDescansoImage.png"),
      fundamentosImage: require("../../assets/fundamentosImage.png"),
      // Ejercicios individuales:
      pushup: require("../../assets/exercises/warrior-1.png"),
      rest: require("../../assets/exercises/rest.png"),
      pullup: require("../../assets/exercises/side-plank.png"),
      kettlebellSwing: require("../../assets/exercises/one-leg-down.png"),
      squatJump: require("../../assets/exercises/half-moon-pose.png"),
      mountainClimbers: require("../../assets/exercises/triangle-pose.png"),
      plankHold: require("../../assets/exercises/wheel-pose.png"),
    };
    setImagesMap(imagesMap);
  }, []);

  return (
    <ImagesMapContext.Provider value={{ imagesMap }}>
      {children}
    </ImagesMapContext.Provider>
  );
}
