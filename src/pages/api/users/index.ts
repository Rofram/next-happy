
export default (req, res) => {
  console.log(req.query);
  console.log(JSON.stringify(req.body));

  res.statusCode = 200;
  res.json({ 
    message: 'Tudo Bem',
    resposta: req.body
  });
}
