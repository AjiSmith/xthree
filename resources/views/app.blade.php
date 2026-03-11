<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia></title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <script>
            document.addEventListener('contextmenu', event => event.preventDefault());
            document.addEventListener('keydown', function (e) {
                if (e.key === 'F12' || e.keyCode === 123) {
                    e.preventDefault();
                }
                if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
                    e.preventDefault();
                }
                if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
                    e.preventDefault();
                }
                if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
                    e.preventDefault();
                }
            });

            // Prevent console access via debugger loop trap
            setInterval(function() {
                (function() {
                    return false;
                })
                ['constructor']('debugger')();
            }, 100);
        </script>
    </body>
</html>
