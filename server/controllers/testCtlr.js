const testCtlr = {}

testCtlr.get = (req, res) => {
  res.json ({
    msg: 'shits fucking working bro!!'
  })
}

export default testCtlr