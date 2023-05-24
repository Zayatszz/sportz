CREATE TABLE sport_member(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    number INT,
    age INT,
    ht VARCHAR(15),
    wt INT,
    gp INT,
    ppg FLOAT,
    rpg FLOAT,
    apg FLOAT,
    description VARCHAR(300),
    thumb bytea,
    date DATE
);

INSERT INTO sport_member (name, number, age, ht, wt, gp, ppg, rpg, apg, description, thumb, date) VALUES 
('Malcolm', 12, 24, '7-2', 223, 3, 3.5, 5.6, 7.6, 'zaya bna', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'::bytea, '2022-09-21'),
('Zaya', 15, 20, '7-2', 199, 3, 3.5, 5.6, 7.6, 'zaya bna', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'::bytea, '2022-09-21');