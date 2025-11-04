drop schema if exists public cascade;
create schema public;
create extension if not exists pgcrypto;

CREATE TABLE documento (
	id SERIAL PRIMARY KEY,
	documento VARCHAR DEFAULT ''
);

CREATE TABLE genero (
	id SERIAL PRIMARY KEY,
	genero VARCHAR DEFAULT ''
);

CREATE TABLE extension (
	id SERIAL PRIMARY KEY,
	extension VARCHAR DEFAULT ''
);

CREATE TABLE persona (
	id SERIAL PRIMARY KEY,
	genero_id INTEGER,
	documento_id INTEGER,
	extension_id INTEGER,
	paterno VARCHAR DEFAULT '',
	materno VARCHAR DEFAULT '',
	nombres VARCHAR DEFAULT '',
	dip VARCHAR NOT NULL UNIQUE,
	numerocomplementario VARCHAR DEFAULT '',
	fechanacimiento DATE DEFAULT now(),
	direccion VARCHAR DEFAULT '',
	telefono VARCHAR DEFAULT '',
	celular VARCHAR DEFAULT '',
	correo VARCHAR DEFAULT '',
	FOREIGN KEY (documento_id) REFERENCES documento(id),
	FOREIGN KEY (extension_id) REFERENCES extension(id),
	FOREIGN KEY (genero_id) REFERENCES genero(id)
);

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    persona_id INTEGER,
    usuario VARCHAR DEFAULT '',
    clave  VARCHAR DEFAULT '',
	rol VARCHAR DEFAULT '',
    FOREIGN KEY (persona_id) REFERENCES persona(id)
);

