# GuiaAlumno

Este proyecto consiste en una aplicación web que ayude a los estudiantes de la Universidad de Tijuana a organizar sus jornada escolar. Actualmente su función es mostrar el horario de cada día de forma sencilla, pero la idea es ir agregando características de forma progresiva que ayuden de otras formas a los estudiantes como mostrando temas de las asignaturas, o permitiendo manejar un calendario con fechas especiales de la universidad.

Este proyecto está siendo construido con Angular para agregar mejoras progresivamente y ya que en el futuro se espera utilizar Ionic y convertirla en App para Android y iOS.

## API

El backend de este proyecto consiste en una API construida con PHP y Slim. Por el momento la API es pública pero cuando se despliegue la aplicación de frontend pasará a implementar una política de CORS.

## Herramientas de diseño

Para agilizar el desarrollo de esta aplicación se está haciendo uso de diferentes herramientas de diseño entre las que se encuentran:

- Angular CDK para manejar la lógica de diferentes componentes como modales u overlays.
- TailwindCSS con DaisyUI para usar componentes ya diseñados.
- FontAwesome para incorporar íconos varios.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
