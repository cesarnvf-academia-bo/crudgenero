PGPASSWORD=123qwe dropdb -h localhost -p 5432 -U postgres tpvbd
PGPASSWORD=123qwe createdb -h localhost -p 5432 -U postgres tpvbd
PGPASSWORD=123qwe psql -h localhost -p 5432 -U postgres -d tpvbd -f tablas.sql
PGPASSWORD=123qwe psql -h localhost -p 5432 -U postgres -d tpvbd -f datos.sql

