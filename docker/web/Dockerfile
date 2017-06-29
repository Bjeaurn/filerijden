FROM nimmis/alpine-apache-php7

COPY web.sh /web.sh
COPY config/php.ini /etc/php7/etc/php/
COPY config/httpd.conf /etc/apache2/httpd.conf

RUN ln -sf /dev/stdout /var/log/apache2/access.log && \
    ln -sf /dev/stderr /var/log/apache2/error.log

EXPOSE 80
EXPOSE 443

CMD ["/web.sh"]