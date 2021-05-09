# Laravel 8 + Sanctum + Fortify + NuxtJS + BootstrapVue Starter pack

This is an upgraded and modified version of [ordigital/laravel-nuxt-bs](https://github.com/ordigital/laravel-nuxt-bs) with Laravel 8, Sanctum SPA Auth and Fortify.

It use [nuxtjs/auth](https://auth.nuxtjs.org/providers/laravel-sanctum) Sanctum provider to log in users.

**Features:**

- Laravel 8
- NuxtJS
- Sanctum SPA Auth
- Fortify
- Nuxt Laravel Integration [m2s/laravel-nuxt](https://github.com/m2sd/laravel-nuxt)
- BootstrapVue
- DotEnv
- ESLint + VSCode support
- Jest

## Installation

- Clone repository: 
```bash
$ git clone https://github.com/frizikk/laravel-nuxtjs-sanctum-fortify your-project
$ cd your-project
```
- Run auto-setup:
```bash
$ ./setup.sh
```
…which just executes commands below:
```bash
$ npm install # installs npm modules
$ npm audit fix # fixes to npm
$ composer install # installs composer modules
$ php artisan key:generate # generates app key in .env
$ touch database/database.sqlite # creates sqlite database
$ php artisan migrate:fresh --seed # migrates and seeds database with example user
```
- Edit `.env` and change:
```bash
APP_NAME="Name of your app"
APP_DESC="Description of your app"
APP_URL=http://localhost:8000
DEV_URL=http://localhost:3000 # axios baseURL for development
LARAVEL_DEV_URL=http://localhost:3001 # axios baseURL for development
```
- You can edit NuxtJS config in `nuxt.config.js` and NuxtJS project in `resources/nuxt`
- Run developement server:
```bash
$ npm run dev
```
- Open website and try to sign in as `alf@melmack.mm` using password `lucky`
- To build for production:
```bash
$ npm run build
$ php artisan serve
```
