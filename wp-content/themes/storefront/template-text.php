<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Swiper demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <!-- Demo styles -->
    <style>
        html,
        body {
            position: relative;
            height: 100%;
        }

        body {
            background: #eee;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #000;
            margin: 0;
            padding: 0;
        }

        .main-swiper {
            position: relative;
            height: 100%;
            background: #eee;
            font-size: 14px;
            color: #000;
            margin: 0;
            padding: 0;
        }

        .swiper {
            width: 100%;
            height: 100%;
        }

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .swiper-v {
            background: #eee;
        }
    </style>
</head>

<body>
    <main class="main-swiper">
        <!-- Swiper -->
        <div class="swiper mySwiper swiper-h">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Horizontal Slide 1</div>
                <div class="swiper-slide">
                    <div class="swiper mySwiper2 swiper-v">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">Vertical Slide 1</div>
                            <div class="swiper-slide">Vertical Slide 2</div>
                            <div class="swiper-slide">Vertical Slide 3</div>
                            <div class="swiper-slide">Vertical Slide 4</div>
                            <div class="swiper-slide">Vertical Slide 5</div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="swiper-slide">Horizontal Slide 3</div>
                <div class="swiper-slide">Horizontal Slide 4</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </main>
    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <!-- Initialize Swiper -->
    <script>
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 50,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        var swiper2 = new Swiper(".mySwiper2", {
            direction: "vertical",
            spaceBetween: 50,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    </script>
</body>

</html>