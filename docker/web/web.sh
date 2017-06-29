#! /bin/sh

echo "Web server starting..."

exec /usr/sbin/httpd -D FOREGROUND
