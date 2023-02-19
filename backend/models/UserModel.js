const User = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ninumber: {
    type: String,
    required: true
  },
  contributions20182019: {
    type: Number,
    required: true
  },
  contributions20192020: {
    type: Number,
    required: true
  },
  difference: {
    type: Number,
    required: true,
    default: function() {
      return this.contributions20192020 - this.contributions20182019;
    }
  }
});

export default mongoose.model("Users", User);
