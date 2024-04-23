from scraper import *

# get array with top tens
trend = top_ten_list()

def setup_trends():

    trends_txt = f"""{trend[0]}
{trend[1]}
{trend[2]}
{trend[3]}
{trend[4]}
{trend[5]}
{trend[6]}
{trend[7]}
{trend[8]}
{trend[9]}
"""
    print(trends_txt)
    with open("content/trends_text.txt", "w") as file:
        file.write(trends_txt)
    


def setup_descriptions():
    # holds the descriptions for each trend respectively
    trend_description = []
    # populate trend descriptions
    for item in trend:
        trend_description.append(generate_paragraph(item))


    description_txt = f"""{trend_description[0]}
{trend_description[1]}
{trend_description[2]}
{trend_description[3]}
{trend_description[4]}
{trend_description[5]}
{trend_description[6]}
{trend_description[7]}
{trend_description[8]}
{trend_description[9]}"""

    with open("content/descriptions_text.txt", "w") as file:
        file.write(description_txt)


# run the functions to setup .txt files for JS
setup_trends() 
#setup_descriptions()