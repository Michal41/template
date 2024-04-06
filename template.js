const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            blue: 'yellow',
          }
        },
        fontFamily: {
          'body': ['"Poppins"']
        }
      }
    }
  </script>
</head>
<body style="font-family: Poppins;">
    <div class="flex justify-center align-center mt-5">
      <img src="https://app-dev.physiostretch.app/images/physioStretchLogo.png" width="300" height="300" />
    </div>
      <h1>dsfsdfsdfs</h1>
</body>
</html>
`
module.exports = { template };