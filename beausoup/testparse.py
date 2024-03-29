from bs4 import BeautifulSoup

html_doc = """
<html>
<head>
<title>Sample HTML Document</title>
</head>
<body>
<h1>Hello, World!</h1>
<p>This is a sample paragraph.</p>
</body>
</html>
"""

# Parse the HTML document
soup = BeautifulSoup(html_doc, 'html.parser')

# Extract title and print it
title = soup.title
print('Title:', title.text)

# Extract paragraphs and print them
paragraphs = soup.find_all('p')
for paragraph in paragraphs:
    print('Paragraph:', paragraph.text)
