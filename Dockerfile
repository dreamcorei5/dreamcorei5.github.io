FROM php:7.2.34-apache

# RUN apt-get update && apt-get install -y
#       libzip-dev \
#       zip \
#       libfreetype6-dev \
#       libjpeg62-turbo-dev \
#       libpng-dev \
#     # && docker-php-ext-configure gd --with-freetype --with-jpeg \
#     && docker-php-ext-install -j$(nproc) gd \
#   && docker-php-ext-configure zip --with-libzip \
#   && docker-php-ext-install zip

# RUN docker-php-ext-install mysqli \
#     && docker-php-ext-install pdo pdo_mysql

# RUN a2enmod rewrite

# Code RUN Dockerfile
# docker build -t php-7.2.34-custom .