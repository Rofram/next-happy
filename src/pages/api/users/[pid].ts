

export default function handler(req, res) {
  const {
    query: { pid },
  } = req;

  res.json({ message: `O Id dessa pagina é: ${pid} ` });
}