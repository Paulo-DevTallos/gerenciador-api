/* eslint-disable prettier/prettier */
db.createUser({
    roles: [
        {
            role: 'readWrtie',
            db: 'user-database',
        },
    ],
});
