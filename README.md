# ledFit_app

# Fitness App - README

## Resumen del Proyecto

Esta es una aplicación de fitness desarrollada en **React Native**. Su objetivo principal es ofrecer una experiencia personalizada para los usuarios que buscan mejorar su salud física, adaptándose a sus metas, niveles de actividad y preferencias. A partir de las imágenes proporcionadas, se interpretan las siguientes funcionalidades y características clave:

### Funcionalidades

1. **Onboarding Interactivo**:

   - **Pantalla de bienvenida**: Introducción con un diseño visualmente atractivo para captar al usuario.
   - **Carrousel informativo**: Varias pantallas que explican las ventajas de la aplicación y guían al usuario sobre cómo empezar.

2. **Configuración de la Cuenta**:

   - Selección de género, edad, peso y altura para personalizar los planes de ejercicios.
   - Selección de metas (por ejemplo: ganar músculo, perder peso, mejorar la resistencia, etc.).
   - Identificación del nivel de actividad física (principiante, intermedio, avanzado).
   - Formulario para completar el perfil del usuario, incluyendo nombre, apodo, email y teléfono.

3. **Autenticación**:

   - Opciones para registrarse con Facebook, Google, Apple o email.
   - Pantallas para iniciar sesión o registrarse de manera sencilla.
   - Recuperación de contraseña mediante código OTP y creación de una nueva contraseña.

4. **Pantalla Principal y Navegación**:

   - Secciones destacadas de "Featured Workouts" y "Workout Levels".
   - Navegación por pestañas con las secciones: Inicio, Descubrir, Notificaciones y Perfil.

5. **Búsqueda y Descubrimiento**:

   - Buscador integrado para encontrar ejercicios por palabras clave.
   - Filtros por niveles de actividad (principiante, intermedio, avanzado).

6. **Rutinas de Entrenamiento**:

   - Listado de ejercicios dentro de cada rutina con detalles como tiempo y nivel.
   - Pantallas de cuenta regresiva para iniciar el entrenamiento y descansos.
   - Indicadores de progreso durante cada ejercicio.

7. **Finalización de Ejercicio**:

   - Pantalla de resumen tras completar una rutina con métricas como calorías quemadas, tiempo total y ejercicios realizados.

---

## Tecnologías Utilizadas

- **React Native**: Framework principal para el desarrollo de la aplicación.
- **Expo**: Herramienta para agilizar el desarrollo y la implementación en dispositivos móviles.
- **React Navigation**: Para la gestión de navegación por Stack y Tabs.
- **Expo Font y Splash Screen**: Para la carga de fuentes personalizadas y pantallas de bienvenida.

---

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/RamaGV/ledFit_app.git
   ```

2. Creación y Dependencias para el proyecto:

   ```bash
   npx create-expo-app@latest LedFit --template blank
   npx expo lint
   npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier
   ?npx expo install expo-font expo-splash-screen
   npx expo install expo-constants
   npx expo install react-native-safe-area-context
   npx expo install react-native-svg
   ```

3. Instalar taiwlindCSS

   ```bash
   npm install nativewind@2
   npm install --save-dev --save-exact tailwindcss@3.3.2
   npx tailwindcss init
   ```

4. React-Native en web

   ```bash
   npx expo install react-dom react-native-web @expo/metro-runtime
   ```

5. Configuración de babel.config.js
   module.exports = function (api) {
      api.cache(true);
         return {
         presets: ["babel-preset-expo"],
         plugins: ["nativewind/babel"],
      };
   };

6. Convertir SVG -> Componente React-Native

   https://react-svgr.com/playground/

---

## Estructura del Proyecto

```
app/
├── assets/
│   ├── fonts/               # Fuentes personalizadas
│   └── images/             # Imágenes y recursos
├── components/             # Componentes reutilizables
├── screens/                # Pantallas principales
│   ├── Onboarding/         # Flujo de bienvenida
│   ├── Auth/               # Inicio de sesión y registro
│   ├── AccountSetup/       # Configuración de la cuenta
│   ├── Home/               # Pantallas de inicio
│   └── Workouts/           # Rutinas de entrenamiento
├── navigation/             # Configuración de rutas y navegación
├── hooks/                  # Hooks personalizados
├── utils/                  # Utilidades y constantes
└── App.js                  # Punto de entrada principal
```
# ledfit_backend
