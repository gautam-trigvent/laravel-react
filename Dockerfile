FROM php:8.3-apache

WORKDIR /var/www/html

COPY backend /var/www/html

# Copy Apache configuration file with updated DocumentRoot
COPY ./apache2/000-default.conf /etc/apache2/sites-available/000-default.conf

# Enable Apache modules and configure the document root
RUN a2enmod rewrite \
    && chown -R www-data:www-data /var/www/html


RUN docker-php-ext-install pdo pdo_mysql mysqli

# Restart Apache to apply changes
RUN service apache2 restart

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
ENV NODE_VERSION=20.12.1
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"