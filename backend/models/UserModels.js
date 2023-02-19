import mongoose from "mongoose";  // Importing Mongoose library

const User = mongoose.Schema({  // Creating a Mongoose schema for User collection
  name: {                       // Name property of User collection
    type: String,              // Type is String
    required: true             // Name is a required field
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
  required: false
  }
});

export default mongoose.model("Users", User);  // Exporting User schema as a Mongoose model named "Users"