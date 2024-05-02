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