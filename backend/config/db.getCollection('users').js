db.getCollection('users').insertMany([
    { username: 'Alice', email: 'alice@example.com', password: 'password123', status: 'online' },
    { username: 'Bob', email: 'bob@example.com', password: 'password123', status: 'online' },
    { username: 'Charlie', email: 'charlie@example.com', password: 'password123', status: 'online' },
    { username: 'Dave', email: 'dave@example.com', password: 'password123', status: 'online' },
    { username: 'Eve', email: 'eve@example.com', password: 'password123', status: 'online' }
]);
