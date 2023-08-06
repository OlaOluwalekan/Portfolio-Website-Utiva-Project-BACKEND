export const verificationTemplate = (code) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verify Your Email</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }
      body {
        background-color: aliceblue;
      }
      .main {
        width: 100%;
        max-width: 600px;
        background-color: white;
      }
    </style>
  </head>
  <body>
    <center>
      <table class="main">
        <!-- STRIP -->
        <tr>
          <td width="100%" height="6px" style="background-color: #6446ff"></td>
        </tr>

        <!-- HEADER -->
        <tr>
          <td style="text-align: center">
            <h2 style="color: #6446ff">
              Bells<span
                style="
                  color: #e63264;
                  -webkit-text-stroke-width: 1px;
                  -webkit-text-stroke-color: #e63264;
                "
                >Arena</span
              >
            </h2>
          </td>
        </tr>

        <!-- STRIP -->
        <tr>
          <td width="100%" height="6px" style="background-color: #e63264"></td>
        </tr>

        <!-- WELCOME -->
        <tr>
          <td style="padding: 0 10px">
            <h3 style="margin-top: 50px">Hi!</h3>
          </td>
        </tr>

        <!-- PARAGRAPH -->
        <tr>
          <td style="padding: 0 10px">
            <p style="margin-top: 20px">
              Verify your email address with the code below
            </p>
          </td>
        </tr>

        <!-- CODE -->
        <tr>
          <td style="text-align: center">
            <h1 style="color: #6446ff; margin: 50px 0">${code}</h1>
          </td>
        </tr>

        <!-- STRIP -->
        <tr>
          <td width="100%" height="6px" style="background-color: #e63264"></td>
        </tr>

        <!-- HEADER -->
        <tr>
          <td style="text-align: center">
            <h2 style="color: #6446ff">
              Bells<span
                style="
                  color: #e63264;
                  -webkit-text-stroke-width: 1px;
                  -webkit-text-stroke-color: #e63264;
                "
                >Arena</span
              >
            </h2>
          </td>
        </tr>

        <!-- STRIP -->
        <tr>
          <td width="100%" height="6px" style="background-color: #6446ff"></td>
        </tr>
      </table>
    </center>
  </body>
</html>
`
