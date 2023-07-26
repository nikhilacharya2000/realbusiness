<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title> @yield('title') </title>
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" name="viewport">
<meta name="Description" lang="en" content="ADD SITE DESCRIPTION">
<meta name="author" content="ADD AUTHOR INFORMATION">
<meta name="robots" content="index, follow">
<meta name="csrf-token" content="{{ csrf_token() }}">

{{-- swiper for slider--}}
<link  rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>

<!-- Favicons -->
<link rel="shortcut icon" href="{{ asset('/assets/images/logo/allaitools_logo.webp') }}">

<!-- custom fonts -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/apercu-font@1.0.0/stylesheet.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&amp;display=swap">

<!-- font-awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

<!-- MDB -->
<link  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.3.0/mdb.min.css"  rel="stylesheet"/>

<!-- bootstrap CDN -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" rel="stylesheet">

<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>

<!-- icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">




<!-- Bootstrap core CSS -->
{{-- <link rel="stylesheet" href="frontend-assets/css/bootstrap.min.css"> --}}

<link href="{{ asset('/frontend-assets/css/home.css') }}" rel="stylesheet">
<link href="{{ asset('/frontend-assets/css/slider.css') }}" rel="stylesheet">
<link href="{{ asset('/frontend-assets/css/custom.css') }}" rel="stylesheet">

<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

{{-- rich text editor --}}
<script src="https://cdn.ckeditor.com/4.21.0/basic/ckeditor.js"></script>
{{-- <script src="{{ asset('/frontend-assets/js/bootstrap.min.js') }}"></script> --}}


