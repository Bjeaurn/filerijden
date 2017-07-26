-- Table: public.cars

-- DROP TABLE public.cars;

CREATE TABLE public.cars
(
    "CarName" text COLLATE pg_catalog."default",
    "CarID" uuid NOT NULL,
    "Kenteken" text COLLATE pg_catalog."default",
    CONSTRAINT cars_pkey PRIMARY KEY ("CarID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.cars
    OWNER to postgres;