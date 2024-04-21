from scraper import *

# get array with top tens
trend = top_ten_list()

html_content = f"""
<!DOCTYPE html>
<html lang="en">
  <head>
      <link href="index.css" rel="stylesheet" type="text/css">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>hashtagTRND</title>
  </head>
  <body>
    <header class="header">
      <a href="https://hashtagtrnd.netlify.app">
        <img src="images/hashtagTRND.png" alt="TRND">
       </a>
      <button class="login-button">Login</button>
    </header>
    <div class="task-bar-container">
      <nav class="task-bar">
        <div>Memes</div>
        <div>Media</div>
        <div>Business</div>
        <div>Sports</div>
        <div>Custom</div>
      </nav>
    </div>
    <main>
      <div class="grid-container">
        <div class="grid">
          <div class="grid-item">
              <h2 class="h2">{trend[0]}</h2>
              <p class="description">desc 1 i think this is th ebest thing for us if there is a really long description i think there is nothing that we should do about it and let it be lets be honest here im the goat</p>
          </div>
          <div class="grid-item">
            <h2 class="h2">{trend[1]}</h2>
            <p class="description">desc 1 i think this is th ebest thing for us if there is a really long description i think there is nothing that we should do about it and let it be lets be honest here im the goat</p>
          </div>
          <div class="grid-item">
            <h2 class="h2">{trend[2]}</h2>
            <p class="description">desc 1 i think this is th ebest thing for us if there is a really long description i think there is nothing that we should do about it and let it be lets be honest here im the goat</p>
          </div>
          <div class="grid-item">
            <h2 class="h2">{trend[3]}</h2>
            <p class="description">desc 1 i think this is th ebest thing for us if there is a really long description i think there is nothing that we should do about it and let it be lets be honest here im the goat</p>
          </div><div class="grid-item">
            <h2 class="h2">{trend[4]}</h2>
            <p class="description">desc 1 i think this is th ebest thing for us if there is a really long description i think there is nothing that we should do about it and let it be lets be honest here im the goat</p>
          </div><div class="grid-item">
            <h2 class="h2">{trend[5]}</h2>
            <p class="description">desc 1 i think this is th ebest thing for us if there is a really long description i think there is nothing that we should do about it and let it be lets be honest here im the goat</p>
          </div><div class="grid-item">
            <h2 class="h2">{trend[6]}</h2>
            <p class="description">desc 1 i think this is th ebest thing for us if there is a really long description i think there is nothing that we should do about it and let it be lets be honest here im the goat</p>
          </div><div class="grid-item">
            <h2 class="h2">{trend[7]}</h2>
            <p class="description">desc 1 i think this is th ebest thing for us if there is a really long description i think there is nothing that we should do about it and let it be lets be honest here im the goat</p>
          </div><div class="grid-item">
            <h2 class="h2">{trend[8]}</h2>
            <p class="description">desc 1 i think this is th ebest thing for us if there is a really long description i think there is nothing that we should do about it and let it be lets be honest here im the goat</p>
          </div><div class="grid-item">
            <h2 class="h2">{trend[9]}</h2>
            <p class="description">desc 1 i think this is th ebest thing for us if there is a really long description i think there is nothing that we should do about it and let it be lets be honest here im the goat</p>
          </div>
      </div>
    </div>
    </main>

    <div id="myModal1" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title1" class="modal-title">Modal Title 1</h2>
        <div class="modal-body">
          <p>{generate_paragraph(trend[0])}</p>
        </div>
      </div>
    </div>

    <!-- Modal Popup HTML for #number2 -->
    <div id="myModal2" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title2">Modal Title 2</h2>
        <div class="modal-body">
          <p>{generate_paragraph(trend[1])}</p>
        </div>
      </div>
    </div>

    <div id="myModal3" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title3">Modal Title 3</h2>
        <div class="modal-body">
          <p>{generate_paragraph(trend[2])}</p>
        </div>
      </div>
    </div>

    <!-- Modal Popup HTML for #number2 -->
    <div id="myModal4" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title4">Modal Title 4</h2>
        <div class="modal-body">
          <p>{generate_paragraph(trend[3])}</p>
        </div>
      </div>
    </div>
    </div>
    <div id="myModal5" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title5">Modal Title 5</h2>
        <div class="modal-body">
          <p>{generate_paragraph(trend[4])}</p>
        </div>
      </div>
    </div>

    <!-- Modal Popup HTML for #number2 -->
    <div id="myModal6" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title6">Modal Title 6</h2>
        <div class="modal-body">
          <p>{generate_paragraph(trend[5])}</p>
        </div>
      </div>
    </div>

    <div id="myModal7" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title7">Modal Title 7</h2>
        <div class="modal-body">
          <p>{generate_paragraph(trend[6])}</p>
        </div>
      </div>
    </div>

    <!-- Modal Popup HTML for #number2 -->
    <div id="myModal8" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title8">Modal Title 8</h2>
        <div class="modal-body">
          <p>{generate_paragraph(trend[7])}</p>
        </div>
      </div>
    </div>

    <div id="myModal9" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title9">Modal Title 9</h2>
        <div class="modal-body">
          <p>{generate_paragraph(trend[8])}</p>
        </div>
      </div>
    </div>

    <!-- Modal Popup HTML for #number2 -->
    <div id="myModal10" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2 id="modal-title10">Modal Title 10</h2>
        <div class="modal-body">
          <p>{generate_paragraph(trend[9])}</p>
        </div>
      </div>
    </div>

    <script src="javascript/index.js"></script> <!-- Add JavaScript file -->
    <script src="javascript/index2.js"></script>
    <script src="javascript/index3.js"></script>
  </body>
</html>

"""

with open("index.html", "w") as file:
    file.write(html_content)
