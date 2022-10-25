const displayContent = (req, res) => {
    const url = req.url;

    if (url == '/profile') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<p> progile page test </p>');
        return res.end();
    }
    else if (url == '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<p> homepage test </p>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<p> no page </p>');
    res.end();
}

module.exports = displayContent;