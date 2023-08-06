const validation = (props) => {
  const letters = /^[a-zA-Z]{2,30}$/;
  const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const dateOfBirth = /^\d{2}-\d{2}-\d{4}$/;
  const regex = {
    name: letters,
    lname: letters,
    email: email,
    dateOfBirth: dateOfBirth,
  };
//   function validateReg(key, value) {
//     if (regex[key].test()) {
//       return true;
//     } else {
//       return false;
//     }
//   }
};
