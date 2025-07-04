export default defineEventHandler((event) => {
    const user = { id: 1, name: 'Alice' };

    console.log('Welcome API called for user:', user.name);

    if (!user) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Not Found',
            message: 'User Not Found',
        });
    }

    // Set shit in here
    // setResponseStatus(event, 202);
    // setResponseHeader(event, 'Content-Type', 'application/json');

    return {
        user: user,
        timestamp: new Date().toString(),
    };
});