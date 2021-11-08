CREATE TABLE language (
language_id SERIAL NOT NULL PRIMARY KEY,
language_name VARCHAR(100),
speakers INTEGER,
endangered BOOLEAN
);


CREATE TABLE country (
country_id SERIAL NOT NULL PRIMARY KEY,
country_name VARCHAR(100),
capital VARCHAR(200),
population INTEGER
);

CREATE TABLE language_country (
language_id SMALLINT,
country_id SMALLINT,
official_status VARCHAR(200),
FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE,
FOREIGN KEY (country_id) REFERENCES country(country_id) ON DELETE CASCADE
);


CREATE TABLE basic_words (
language_id SMALLINT PRIMARY KEY,
one VARCHAR(100),
two VARCHAR(100),
three VARCHAR(100),
four VARCHAR(100),
five VARCHAR(100),
hello VARCHAR(100),
goodbye VARCHAR(100),
FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE
);


INSERT INTO language
(language_name, speakers, endangered)
VALUES
('spanish',489000000,false),
('french',274000000,false),
('catalan',4100000,false),
('romanian',25000000,false),
('dalmatian',0,NULL),
('flemish',65000000,false)

INSERT INTO country
(country_name,population,capital)
VALUES
('france',65129728,'paris'),
('spain',46736776,'madrid'),
('brazil',211049527,'brasilia'),
('belgium',11539328,'brussels'),
('canada',37411047,'ottawa'),
('romania',19364557,'bucharest'),
('mexico',127575529,'mexico city')

INSERT INTO language_country
(language_id,country_id,official_status)
VALUES
(1,2,'official'),
(1,7,'official'),
(2,1,'official'),
(2,4,'official'),
(2,5,'official'),
(3,2,'regional official'),
(4,6,'official'),
(6,4,'official')

INSERT INTO basic_words
(language_id,one,two,three,four,five,hello,goodbye)
VALUES
(1,'uno','dos','tres','cuatro','cinco','hola','adios'),
(2,'un','deux','trois','quatre','cinq','bonjour','au revoir'),
(3,'un','dos','tres','quatre','cinc','hola','adéu'),
(4,'unul','doi','trei','patru','cinci','salut','revedere'),
(5,'join','dói','tra','quatro','čenc','buna dai',NULL),
(6,'een','twee','drie','vier','vijf','hallo','vaarwel')





SELECT language_name,speakers,country_name,population FROM language l
INNER JOIN language_country lc
ON l.language_id = lc.language_id
INNER JOIN country c
ON lc.country_id = c.country_id

SELECT language_name,speakers,country_name,population FROM language l
LEFT JOIN language_country lc
ON l.language_id = lc.language_id
LEFT JOIN country c
ON lc.country_id = c.country_id

SELECT language_name,speakers FROM language l
LEFT JOIN language_country lc
ON l.language_id = lc.language_id
LEFT JOIN country c
ON lc.country_id = c.country_id
WHERE lc.language_id IS NULL

SELECT language_name,speakers,country_name,population FROM language l
RIGHT JOIN language_country lc
ON l.language_id = lc.language_id
RIGHT JOIN country c
ON lc.country_id = c.country_id

SELECT language_name,speakers,country_name,population FROM language l
FULL JOIN language_country lc
ON l.language_id = lc.language_id
FULL JOIN country c
ON lc.country_id = c.country_id


SELECT language_name,speakers,country_name,population FROM language l
FULL JOIN language_country lc
ON l.language_id = lc.language_id
FULL JOIN country c
ON lc.country_id = c.country_id
WHERE (l.language_id IS NULL
OR c.country_id IS NULL)











