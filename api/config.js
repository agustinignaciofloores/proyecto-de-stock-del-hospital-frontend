module.exports = (request, response) => {
    response.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    response.setHeader('Cache-Control', 'no-store');
    response.status(200).send(
        `window.BACKEND_ORIGIN = ${JSON.stringify(process.env.BACKEND_ORIGIN || '')};`
    );
};
