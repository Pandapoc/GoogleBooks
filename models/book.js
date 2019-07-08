module.exports = (Schema, model) => model('Book', new Schema({
  title: {
    type: String
  },
  authors: {
    type: Array
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
}))
