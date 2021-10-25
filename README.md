# developer-program

Main website for Dock developer program.

Website is built with Jekyll (https://jekyllrb.com/docs/) and webpack (https://webpack.js.org/).

## Prerequisites

In order to run the app in development mode, you must have docker installed. (https://www.docker.com/get-started)

### Styles

Website is styled using tailwindcss (https://tailwindcss.com/), daisyui (https://daisyui.com/) and heroicons (https://heroicons.com).

Styles can be modified in `webpack/style.css` file.

### Commands

```bash
make setup # starts the docker container and installs all necessary packages
```

```bash
make up # starts webite in development mode
```

```bash
make down # removes old containers
```


### Development

```bash

make up

open http://localhost:4000
```


### Deployment

:warning: Make sure you compile and commit static assets before you merge your changes.

```bash
make build-assets
```

Website is deployed automaticaly after you merge your branch into the `main` branch.
