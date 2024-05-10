USE ichigo_plushies_DB;

-- create roles in system

insert into roles (id, name) values (1, 'super_admin');
insert into roles (id, name) values (2, 'admin');
insert into roles (id, name, description) values (3, 'crafter', 'The person who creates the plushies');
insert into roles (id, name) values (4, 'user');
insert into roles (id, name, description) values (5, 'subscriber', 'Once per month will recieve a plushie accessory');

-- create users in system
insert into users (id, user_name, role_id, password, email, is_active) values (1, 'super_admin', 1, '$2b$08$XJV1JjyzN9SdHXTUvjbWcu6PdunKojK9ovxsgNd/PUQ1EcpYcuTgq', 'superadmin@email.com', 1);
insert into users (id, user_name, role_id, password, email, is_active) values (2, 'admin', 2, '$08$cISKK0HLqPO/bpG5jdMtpuaghTzDqkGv1FkdzJERbmFLZaTtJ4LNW', 'admin@email.com', 1);
insert into users (id, user_name, role_id, password, email, is_active) values (3, 'crafter', 3, '$08$cISKK0HLqPO/bpG5jdMtpuaghTzDqkGv1FkdzJERbmFLZaTtJ4LNW', 'crafter@crafter.com', 1);
insert into users (id, user_name, role_id, password, email, is_active) values (4, 'user', 4, '$08$cISKK0HLqPO/bpG5jdMtpuaghTzDqkGv1FkdzJERbmFLZaTtJ4LNW', 'user@email.com', 1);
insert into users (id, user_name, role_id, password, email, is_active) values (5, 'user_subscriber', 5, '$08$cISKK0HLqPO/bpG5jdMtpuaghTzDqkGv1FkdzJERbmFLZaTtJ4LNW', 'subscriber@email.com', 1);
insert into users (id, user_name, role_id, password, email, is_active) values (6, 'Livi', 4, '$08$cISKK0HLqPO/bpG5jdMtpuaghTzDqkGv1FkdzJERbmFLZaTtJ4LNW', 'livi@email.com', 1);
insert into users (id, user_name, role_id, password, email, is_active) values (7, 'Zakiel', 4, '$08$cISKK0HLqPO/bpG5jdMtpuaghTzDqkGv1FkdzJERbmFLZaTtJ4LNW', 'zakiel@email.com', 1);
insert into users (id, user_name, role_id, password, email, is_active) values (8, 'Amarys', 4, '$2b$08$XJV1JjyzN9SdHXTUvjbWcu6PdunKojK9ovxsgNd/PUQ1EcpYcuTgq', 'amarys@email.com', 1);


-- pashword_hash $2b$08$XJV1JjyzN9SdHXTUvjbWcu6PdunKojK9ovxsgNd/PUQ1EcpYcuTgq -> @Test12345

-- create examples in examples

insert into examples (id, title, description, image) values (1, 'Helios Ashes', 'Confeccionado en tela de peluche suave, bordado de ojos simple a máquina. Ropa: Capa confeccionada en tela de peluche suave y detalles bordados en máquina. Pantalones confeccionados en tela de peluche suave. Todas las prendas se pueden quitar.', 'https://i.ibb.co/ccBQz1z/01.jpg');
insert into examples (id, title, description, image) values (2, 'DJ Takoyakiboy', 'Confeccionado en tela de peluche suave, bordado de ojos simple a máquina, detalles de cara con fieltro. Ropa: Gorro tejido a mano con técnica crochet. Camiseta y pantalones confeccionados en loneta y pintados a mano con pintura textil (estas prendas no se pueden quitar). Kimono confeccionado en tela de sarga, remate en bies azul claro y pintado a mano con pintura textil.',  'https://i.ibb.co/yN6HN3F/02.jpg');
insert into examples (id, title, description, image) values (3, 'Amarys', 'Confeccionado en tela de peluche suave, bordado de ojos simple a máquina. Ropa: Prendas confeccionadas en tela de peluche suave y detalles con tela de fieltro y polipiel con purpurina. Las prendas no se pueden quitar.',  'https://i.ibb.co/640P65h/04.jpg');
insert into examples (id, title, description, image) values (4, 'Zakiel', 'Confeccionado en tela de peluche suave, bordado de ojos simple a máquina. Ropa: Prendas confeccionadas en tela de peluche suave y detalles con tela de fieltro y cadena de plástico. Las prendas no se pueden quitar.', 'https://i.ibb.co/7pwBcXj/03.jpg');
insert into examples (id, title, description, image) values (5, 'Hiyori Tomoe', 'Confeccionado en tela de peluche suave, bordado de ojos simple a máquina.', 'https://i.ibb.co/4jy8QvS/05.jpg');

-- create orders in orders
insert into orders (id, user_id, budget_id, status) values (1, 6, 1, 'work in progress');
insert into orders (id, user_id, budget_id, status) values (2, 7, 2, 'pending');
insert into orders (id, user_id, budget_id, status) values (3, 8, 3, 'sent');

-- create reviews in reviews
insert into reviews (id, user_id, order_id, text, rating, created_at) values (1, 6, 2, 'I love it!', 4, '2021-09-01 00:00:00');
insert into reviews (id, user_id, order_id, text, rating, created_at) values (2, 7, 3, 'It is so cute!', 4, '2021-09-01 00:00:00');
insert into reviews (id, user_id, order_id, text, rating, created_at) values (3, 8, 4,  'Perfect!', 5, '2021-09-01 00:00:00');

-- create address in address
insert into address (id, user_id, name, surname, phone, street, city, state, country, postal_code, is_active, created_at, updated_at, title) values (1, 6, 'Ulrica', 'Hurtic', '2969126188', '217 Sugar Point', 'Vila Viçosa', 'Évora', 'PT', '7160-208', true, '2024-05-03 22:40:59', '2024-05-07 01:35:11', 'in sapien iaculis');
insert into address (id, user_id, name, surname, phone, street, city, state, country, postal_code, is_active, created_at, updated_at, title) values (2, 7, 'Claudio', 'Streetfield', '8093446819', '26434 Westerfield Drive', 'Palmas De Gran Canaria, Las', 'Canarias', 'ES', '35015', true, '2024-04-30 14:29:55', '2024-04-27 02:28:11', 'lorem quisque ut erat curabitur');
insert into address (id, user_id, name, surname, phone, street, city, state, country, postal_code, is_active, created_at, updated_at, title) values (3, 8, 'Lorenza', 'Lince', '9101206689', '96495 Mifflin Street', 'Outeiro', 'Vila Real', 'PT', '5470-332', true, '2024-04-11 00:54:19', '2024-04-23 18:06:45', 'nulla ac enim in');
insert into address (id, user_id, name, surname, phone, street, city, state, country, postal_code, is_active, created_at, updated_at, title) values (4, 4, 'Cello', 'Kevlin', '4825842112', '4 Express Lane', 'Palma De Mallorca', 'Baleares', 'ES', '07010', true, '2024-04-14 17:55:17', '2024-04-30 20:01:09', 'nullam porttitor lacus');
insert into address (id, user_id, name, surname, phone, street, city, state, country, postal_code, is_active, created_at, updated_at, title) values (5, 5, 'Debee', 'Seyers', '2435196985', '3 Rieder Court', 'Sabadell', 'Cataluna', 'ES', '08204', true, '2024-04-05 16:53:52', '2024-05-07 11:14:21', 'est lacinia nisi');