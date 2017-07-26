for file in ./sql/*
do
PGPASSWORD=postgres psql --username=postgres --host=localhost -f $file
done
