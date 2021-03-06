FROM nimmis/alpine-micro

MAINTAINER nimmis <kjell.havneskold@gmail.com>

COPY root/. /

RUN apk update && apk upgrade && \

    # Make info file about this build
    printf "Build of nimmis/alpine-apache, date: %s\n"  `date -u +"%Y-%m-%dT%H:%M:%SZ"` >> /etc/BUILD && \

    apk add apache2 libxml2-dev apache2-utils && \
    mkdir /web/ && chown -R apache.www-data /web && \
   
    sed -i 's#^DocumentRoot ".*#DocumentRoot "/web/html"#g' /etc/apache2/httpd.conf && \
    sed -i 's#AllowOverride none#AllowOverride All#' /etc/apache2/httpd.conf && \
    sed -i 's#^ServerRoot .*#ServerRoot /web#g'  /etc/apache2/httpd.conf && \
    sed -i 's/^#ServerName.*/ServerName webproxy/' /etc/apache2/httpd.conf && \
    sed -i 's#^IncludeOptional /etc/apache2/conf#IncludeOptional /web/config/conf#g' /etc/apache2/httpd.conf && \
    sed -i 's#PidFile "/run/.*#Pidfile "/web/run/httpd.pid"#g'  /etc/apache2/conf.d/mpm.conf && \
    sed -i 's#Directory "/var/www/localhost/htdocs.*#Directory "/web/html" >#g' /etc/apache2/httpd.conf && \
    sed -i 's#Directory "/var/www/localhost/cgi-bin.*#Directory "/web/cgi-bin" >#g' /etc/apache2/httpd.conf && \

    sed -i 's#/var/log/apache2/#/web/logs/#g' /etc/logrotate.d/apache2 && \
    sed -i 's/Options Indexes/Options /g' /etc/apache2/httpd.conf && \

    rm -rf /var/cache/apk/*



ARG IMAGE_NAME
ARG DOCKER_REPO
ARG BUILD_DATE
ARG VCS_REF

RUN  apk update && apk upgrade && \

    # Make info file about this build
    printf "Build of %s, date: %s\n" $(echo $IMAGE_NAME | sed 's#^.*io/##')  `date -u +"%Y-%m-%dT%H:%M:%SZ"` \

    # npm doesn't work...
    # apk add nodejs nodejs-npm && npm install npm@latest -g && \
    apk add libressl && \
    apk add curl openssl && \

    apk add php7 php7-apache2 php7-openssl php7-mbstring && \
    apk add php7-apcu php7-intl php7-mcrypt php7-json php7-gd php7-curl && \
    apk add php7-fpm php7-mysqlnd php7-pgsql php7-sqlite3 php7-phar && \
    # waiting for module to be release on alpine
    # apk add php7-imagick@testing

    # fix compatible with old scripts
    ln -s /usr/bin/php7 /usr/bin/php && \

    # install composer
    cd /tmp && curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer && \

    #clear cache
    rm -rf /var/cache/apk/*

VOLUME /web

COPY web.sh /web.sh
# COPY config/php.ini /etc/php7/etc/php/
# COPY config/httpd.conf /etc/apache2/httpd.conf

EXPOSE 80
EXPOSE 443

RUN ln -sf /dev/stdout /var/log/apache2/access.log && \
    ln -sf /dev/stderr /var/log/apache2/error.log

RUN adduser -D filerijden
USER filerijden

CMD ["/web.sh"]