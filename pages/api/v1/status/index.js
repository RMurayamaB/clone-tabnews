function status(request, response) {
  response.status(200).json({ chave: "Status funcionando normalmente!" });
}

export default status;
