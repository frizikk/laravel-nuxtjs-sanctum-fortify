<?php
use M2S\LaravelNuxt\Facades\Nuxt;

Nuxt::route('/{path?}')->where('path', '^(?!api).*$')->name('nuxt');

