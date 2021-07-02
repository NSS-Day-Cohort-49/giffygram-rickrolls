export let Register = () => {
    return `
    <form action="action_page.php">
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>

      <label for="name"><b>Name</b></label>
      <input type="text" placeholder="Enter Name" name="name" id="name" required>

  
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required>
  
      <label for="picture"><b>Enter An Image Url</b></label>
      <input type="text" placeholder="Enter Picture" name="picture" id="picture" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
  
      <label for="psw-repeat"><b>Verify Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
      <hr>

      <label for="picture"><b>Enter An Image Url</b></label>
      <input type="text" placeholder="Enter Picture" name="picture" id="picture" required>

      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button type="submit" class="registerbtn">Register</button>
    </div>
  
    <div class="container signin">
      <p>Already have an account? <a href="/">Login</a>.</p>
    </div>
  </form>
    `
}