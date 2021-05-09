<?php

return [
    'routing' => true,
    'prefix'  => '',

    'source' => env('NUXT_OUTPUT_PATH') ?: base_path().'/public/spa.html',
    'ssr'    => env('NUXT_SSR_PROXY', false),
];
