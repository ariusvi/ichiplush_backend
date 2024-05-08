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

-- pashword_hash $2b$08$XJV1JjyzN9SdHXTUvjbWcu6PdunKojK9ovxsgNd/PUQ1EcpYcuTgq -> @Test12345

-- create examples in examples

insert into examples (id, title, description, image) values (1, 'Helios Ashes', 'Confeccionado en tela de peluche suave, bordado de ojos simple a máquina.
Ropa:
Capa confeccionada en tela de peluche suave y detalles bordados en máquina.
Pantalones confeccionados en tela de peluche suave.
Todas las prendas se pueden quitar.', 'https://i.ibb.co/ccBQz1z/01.jpg');
insert into examples (id, title, description, image) values (2, 'DJ Takoyakiboy', 'Confeccionado en tela de peluche suave, bordado de ojos simple a máquina, detalles de cara con fieltro.
Ropa:
Gorro tejido a mano con técnica crochet.
Camiseta y pantalones confeccionados en loneta y pintados a mano con pintura textil (estas prendas no se pueden quitar).
Kimono confeccionado en tela de sarga, remate en bies azul claro y pintado a mano con pintura textil.',  'https://i.ibb.co/yN6HN3F/02.jpg');
insert into examples (id, title, description, image) values (3, 'Amarys', 'Confeccionado en tela de peluche suave, bordado de ojos simple a máquina.
Ropa:
Prendas confeccionadas en tela de peluche suave y detalles con tela de fieltro y polipiel con purpurina.
Las prendas no se pueden quitar.',  'https://i.ibb.co/640P65h/04.jpg');
insert into examples (id, title, description, image) values (4, 'Zakiel', 'Confeccionado en tela de peluche suave, bordado de ojos simple a máquina.
Ropa:
Prendas confeccionadas en tela de peluche suave y detalles con tela de fieltro y cadena de plástico.
Las prendas no se pueden quitar.', 'https://i.ibb.co/7pwBcXj/03.jpg');
insert into examples (id, title, description, image) values (5, 'Hiyori Tomoe', 'Confeccionado en tela de peluche suave, bordado de ojos simple a máquina.', 'https://i.ibb.co/4jy8QvS/05.jpg');
