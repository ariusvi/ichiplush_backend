USE ichigo_plushies_DB;

-- create roles in system

insert into roles (id, name) values (1, 'super_admin');
insert into roles (id, name) values (2, 'admin');
insert into roles (id, name, description) values (3, 'crafter', 'The person who creates the plushies');
insert into roles (id, name) values (4, 'user');
insert into roles (id, name, description) values (5, 'subscriber', 'Once per month will recieve a plushie accessory');

-- pashword_hash $08$cISKK0HLqPO/bpG5jdMtpuaghTzDqkGv1FkdzJERbmFLZaTtJ4LNW -> @Test12345